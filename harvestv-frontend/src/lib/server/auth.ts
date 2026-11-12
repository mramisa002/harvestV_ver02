import {createHash, randomBytes, randomUUID, scrypt, timingSafeEqual} from 'node:crypto';
import {cookies} from 'next/headers';
import {db, owner, validWrite} from './database';
import {bangladeshDivisions} from '../bangladesh';

const derive = (password:string,salt:string,length:number,settings:typeof options)=>new Promise<Buffer>((resolve,reject)=>scrypt(password,salt,length,settings,(error,key)=>error?reject(error):resolve(key)));
const options = {N:131072, r:8, p:1, maxmem:256*1024*1024};
export const profileColumns = 'name,phone,district,language,updated_at AS updatedAt';
export function normalizePhone(value:unknown){
 if(typeof value!=='string')return null;
 let phone=value.trim().replace(/[০-৯]/g,d=>String('০১২৩৪৫৬৭৮৯'.indexOf(d))).replace(/[\s()-]/g,'');
 if(phone.startsWith('+880'))phone='0'+phone.slice(4);
 else if(phone.startsWith('880'))phone='0'+phone.slice(3);
 return /^01[3-9]\d{8}$/.test(phone)?phone:null;
}
export function fields(body:Record<string,unknown>){
 const phone=normalizePhone(body.phone);
 if(typeof body.name!=='string'||!body.name.trim()||body.name.trim().length>100||/[\u0000-\u001f]/.test(body.name))throw new Error('INVALID_NAME');
 if(!phone)throw new Error('INVALID_PHONE');
 if(!bangladeshDivisions.some(d=>d.districts.some(([name])=>name===body.district)))throw new Error('INVALID_DISTRICT');
 if(body.language!=='en'&&body.language!=='bn')throw new Error('INVALID_LANGUAGE');
 return {name:body.name.trim(),phone,district:body.district as string,language:body.language};
}
export async function hashPassword(password:string){const salt=randomBytes(16).toString('hex');const hash=await derive(password,salt,64,options) as Buffer;return `${salt}:${hash.toString('hex')}`;}
const dummyHash='0'.repeat(32)+':'+ '0'.repeat(128);
export async function verifyPassword(password:string,encoded:string=dummyHash){const [salt,hex]=encoded.split(':');const actual=await derive(password,salt,64,options) as Buffer;const expected=Buffer.from(hex,'hex');return expected.length===actual.length&&timingSafeEqual(actual,expected);}
export async function createSession(userId:string){
 const jar=await cookies();const previous=jar.get('harvestv-auth')?.value;
 if(previous)db().prepare('DELETE FROM sessions WHERE token_hash=?').run(createHash('sha256').update(previous).digest('hex'));
 db().prepare('DELETE FROM sessions WHERE expires_at<=?').run(Date.now());
 const token=randomBytes(32).toString('hex'),maxAge=60*60*24*7;
 db().prepare('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES(?,?,?)').run(createHash('sha256').update(token).digest('hex'),userId,Date.now()+maxAge*1000);
 jar.set('harvestv-auth',token,{httpOnly:true,sameSite:'lax',secure:process.env.HARVESTV_COOKIE_SECURE==='true'||(process.env.NODE_ENV==='production'&&process.env.HARVESTV_COOKIE_SECURE!=='false'),path:'/',maxAge});
 jar.delete('harvestv-session');
}
export async function logout(){const jar=await cookies(),token=jar.get('harvestv-auth')?.value;if(token)db().prepare('DELETE FROM sessions WHERE token_hash=?').run(createHash('sha256').update(token).digest('hex'));jar.delete('harvestv-auth');}
export function limit(key:string,max:number){
 const now=Date.now();db().prepare('DELETE FROM auth_limits WHERE reset_at<=?').run(now);
 db().prepare('INSERT INTO auth_limits(key,attempts,reset_at) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET attempts=attempts+1').run(key,now+15*60*1000);
 const row=db().prepare('SELECT attempts FROM auth_limits WHERE key=?').get(key) as {attempts:number};
 if(row.attempts>max)throw new Error('RATE_LIMITED');
}
export function withAuth(handler:(request:Request)=>Promise<Response>){return async(request:Request)=>{
 try{await owner();}catch(error){return Response.json({error:error instanceof Error&&error.message==='UNAUTHORIZED'?'UNAUTHORIZED':'STORAGE_UNAVAILABLE'},{status:error instanceof Error&&error.message==='UNAUTHORIZED'?401:503,headers:{'Cache-Control':'no-store'}});}
 const response=await handler(request);response.headers.set('Cache-Control','no-store');return response;
};}
export async function authRequest(request:Request,action:'register'|'login'){
 if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});
 try{
  const text=await request.text();if(text.length>4096)return Response.json({error:'TOO_LARGE'},{status:413});
  let body;try{body=JSON.parse(text);}catch{return Response.json({error:'INVALID_REQUEST'},{status:400});}
  if(!body||typeof body!=='object'||Array.isArray(body))return Response.json({error:'INVALID_REQUEST'},{status:400});
  // A global budget also bounds attempts using random phone numbers; no untrusted proxy IP headers.
  limit('auth-global',100);
  const phone=normalizePhone(body.phone);if(!phone)throw new Error('INVALID_PHONE');
  limit('phone:'+phone,10);
  if(typeof body.password!=='string'||body.password.length<15||body.password.length>128)throw new Error('INVALID_PASSWORD');
  if(action==='register'){
   const profile=fields(body),id=randomUUID(),hash=await hashPassword(body.password),updatedAt=new Date().toISOString();
   try{db().prepare('INSERT INTO users(id,name,phone,district,language,password_hash,updated_at) VALUES(?,?,?,?,?,?,?)').run(id,profile.name,phone,profile.district,profile.language,hash,updatedAt);}catch(error){if(String(error).includes('UNIQUE constraint failed: users.phone'))throw new Error('PHONE_EXISTS');throw error;}
   await createSession(id);return Response.json({profile:{...profile,updatedAt}},{status:201,headers:{'Cache-Control':'no-store'}});
  }
  const user=db().prepare(`SELECT id,password_hash,${profileColumns} FROM users WHERE phone=?`).get(phone) as {id:string;password_hash:string}|undefined;
  const verified=await verifyPassword(body.password,user?.password_hash);
  if(!user||!verified)return Response.json({error:'INVALID_CREDENTIALS'},{status:401});
  await createSession(user.id);const profile=db().prepare(`SELECT ${profileColumns} FROM users WHERE id=?`).get(user.id);
  return Response.json({profile},{headers:{'Cache-Control':'no-store'}});
 }catch(error){const code=error instanceof Error?error.message:'';const status=code==='RATE_LIMITED'?429:code==='PHONE_EXISTS'?409:code.startsWith('INVALID_')?400:503;return Response.json({error:status===503?'AUTH_UNAVAILABLE':code},{status,headers:{'Cache-Control':'no-store',...(status===429?{'Retry-After':'900'}:{})}});}
}
