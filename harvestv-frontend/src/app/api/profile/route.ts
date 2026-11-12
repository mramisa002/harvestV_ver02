import {db,owner,validWrite} from '@/lib/server/database';
import {fields,profileColumns,withAuth} from '@/lib/server/auth';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export const GET=withAuth(async()=>{
 try{return Response.json({profile:db().prepare(`SELECT ${profileColumns} FROM users WHERE id=?`).get(await owner())});}
 catch{return Response.json({error:'STORAGE_UNAVAILABLE'},{status:503});}
});
export const PUT=withAuth(async(request:Request)=>{
 if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});
 try{
  const text=await request.text();if(text.length>4096)return Response.json({error:'TOO_LARGE'},{status:413});
  let body;try{body=JSON.parse(text);}catch{return Response.json({error:'INVALID_REQUEST'},{status:400});}
  if(!body||typeof body!=='object'||Array.isArray(body))return Response.json({error:'INVALID_REQUEST'},{status:400});
  const profile=fields(body),user=await owner(),updatedAt=new Date().toISOString();
  const current=db().prepare('SELECT phone FROM users WHERE id=?').get(user) as {phone:string};
  if(profile.phone!==current.phone)return Response.json({error:'PHONE_IMMUTABLE'},{status:400});
  db().prepare('UPDATE users SET name=?,district=?,language=?,updated_at=? WHERE id=?').run(profile.name,profile.district,profile.language,updatedAt,user);
  return Response.json({profile:{...profile,updatedAt}});
 }catch(error){const code=error instanceof Error?error.message:'';return Response.json({error:code.startsWith('INVALID_')?code:'SAVE_FAILED'},{status:code.startsWith('INVALID_')?400:503});}
});

export const PATCH=withAuth(async(request:Request)=>{
 if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});
 try{const text=await request.text();if(text.length>100)return Response.json({error:'TOO_LARGE'},{status:413});const body=JSON.parse(text);if(body?.language!=='en'&&body?.language!=='bn')return Response.json({error:'INVALID_LANGUAGE'},{status:400});db().prepare('UPDATE users SET language=?,updated_at=? WHERE id=?').run(body.language,new Date().toISOString(),await owner());return Response.json({success:true});}catch{return Response.json({error:'SAVE_FAILED'},{status:400});}
});
