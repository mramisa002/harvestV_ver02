// Offline integration tests: execute the actual route handlers with real SQLite.
// Only Next's request-cookie adapter is substituted. No HTTP/UI success is implied.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {AsyncLocalStorage} = require('node:async_hooks');
const {spawnSync} = require('node:child_process');
const {randomBytes,createHash} = require('node:crypto');
const ts = require('typescript');
const root=path.resolve(__dirname,'..');
if(!process.env.HARVESTV_AUTH_TEST_CHILD){
 const directory=fs.mkdtempSync(path.join(root,'.auth-test-'));
 try{
  for(const phase of ['write','restart']){
   const result=spawnSync(process.execPath,[__filename],{cwd:root,env:{...process.env,HARVESTV_AUTH_TEST_CHILD:phase,HARVESTV_DATA_DIR:directory},encoding:'utf8'});
   process.stdout.write(result.stdout);process.stderr.write(result.stderr);assert.equal(result.status,0,phase+' phase failed');
  }
  console.log('PASS: actual process restart preserves account, session, profile, farm, and language.');
 }finally{for(const name of fs.readdirSync(directory))fs.unlinkSync(path.join(directory,name));fs.rmdirSync(directory);}
 return;
}
const scope=new AsyncLocalStorage(),cache=new Map();
function load(file){
 file=path.resolve(file);if(cache.has(file))return cache.get(file).exports;
 const module={exports:{}};cache.set(file,module);
 const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
 const localRequire=name=>{
  if(name==='next/headers')return {cookies:async()=>scope.getStore().jar};
  if(name.startsWith('@/'))return load(path.join(root,'src',name.slice(2)+'.ts'));
  if(name.startsWith('.'))return load(path.resolve(path.dirname(file),name+'.ts'));
  return require(name);
 };
 vm.runInThisContext('(function(require,module,exports){'+code+'\n})',{filename:file})(localRequire,module,module.exports);
 return module.exports;
}
const routes={};for(const name of ['profile','farms','feedback','rotation','information-check','auth/register','auth/login','auth/logout'])routes[name]=load(path.join(root,'src/app/api',name,'route.ts'));
function client(initial){const values=new Map(initial||[]);return {values,jar:{get:name=>values.has(name)?{value:values.get(name)}:undefined,set:(name,value,options)=>{assert.ok(options.httpOnly);assert.equal(options.sameSite,'lax');values.set(name,value);},delete:name=>values.delete(name)}};}
const base='http://127.0.0.1:3000';
async function call(who,route,method='GET',body,extra={}){return scope.run(who,()=>routes[route][method](new Request(base+'/api/'+route,{method,headers:{Origin:base,'Content-Type':'application/json',...extra},...(body!==undefined?{body:JSON.stringify(body)}:{})})));}
const password=randomBytes(24).toString('base64');
const account={name:'Test Farmer',phone:'01712345678',district:'Chattogram',language:'bn',password};
const fixture=path.join(process.env.HARVESTV_DATA_DIR,'fixture.json');
(async()=>{
 if(process.env.HARVESTV_AUTH_TEST_CHILD==='restart'){
  const stored=JSON.parse(fs.readFileSync(fixture,'utf8')),a=client(stored.cookies);
  const profile=await (await call(a,'profile')).json();assert.equal(profile.profile.name,'Updated Farmer');assert.equal(profile.profile.district,'Dhaka');assert.equal(profile.profile.language,'en');
  assert.equal((await (await call(a,'farms')).json()).farm.name,'Persistent Farm');
  const newcomer=client();assert.equal((await call(newcomer,'auth/login','POST',{phone:account.phone,password:stored.password})).status,200);
  assert.equal((await (await call(newcomer,'profile')).json()).profile.name,'Updated Farmer');
  console.log('PASS: reopened database, saved session, saved farm, and fresh password login after restart.');return;
 }
 const a=client(),b=client(),anon=client();
 for(const route of ['profile','farms','feedback','rotation'])assert.equal((await call(anon,route)).status,401);
 assert.equal((await call(anon,'information-check','POST',{advice:'example'})).status,401);
 assert.equal((await call(a,'auth/register','POST',{...account,phone:'01212345678'})).status,400);
 assert.equal((await call(a,'auth/register','POST',{...account,password:'short'})).status,400);
 assert.equal((await call(a,'auth/register','POST',{...account,district:'Unknown'})).status,400);
 assert.equal((await call(a,'auth/register','POST',{...account,language:'fr'})).status,400);
 assert.equal((await call(a,'auth/register','POST',account,{Origin:'https://evil.example'})).status,403);
 assert.equal((await call(a,'auth/register','POST',account)).status,201);
 assert.equal((await call(anon,'auth/register','POST',{...account,phone:'+880 1712-345678'})).status,409);
 assert.equal((await call(anon,'auth/register','POST',{...account,phone:'০১৭১২৩৪৫৬৭৮'})).status,409);
 assert.equal((await call(client([['harvestv-session','a'.repeat(64)]]),'profile')).status,401);
 const {db}=load(path.join(root,'src/lib/server/database.ts'));
 const row=db().prepare('SELECT password_hash FROM users WHERE phone=?').get(account.phone);assert.notEqual(row.password_hash,password);assert.ok(!row.password_hash.includes(password));
 const token=a.values.get('harvestv-auth');assert.ok(!db().prepare('SELECT 1 FROM sessions WHERE token_hash=?').get(token));assert.ok(db().prepare('SELECT 1 FROM sessions WHERE token_hash=?').get(createHash('sha256').update(token).digest('hex')));
 assert.equal((await call(b,'auth/register','POST',{...account,phone:'01812345678',name:'Other Farmer'})).status,201);
 assert.equal((await (await call(b,'profile')).json()).profile.name,'Other Farmer');
 const updated={name:'Updated Farmer',phone:account.phone,district:'Dhaka',language:'en'};
 assert.equal((await call(a,'profile','PUT',updated,{Origin:'https://evil.example'})).status,403);
 assert.equal((await call(a,'profile','PUT',updated)).status,200);
 assert.equal((await (await call(b,'profile')).json()).profile.name,'Other Farmer');
 const farm={name:'Persistent Farm',label:'Dhaka',latitude:23.81,longitude:90.41,details:{division:'Dhaka',district:'Dhaka'}};
 const saved=await call(a,'farms','PUT',farm);assert.equal(saved.status,200);const farmId=(await saved.json()).farm.id;
 assert.equal((await call(b,'farms','PUT',{...farm,id:farmId,name:'Stolen Farm'})).status,404);
 assert.equal((await call(b,'farms','PATCH',{id:farmId})).status,404);
 assert.equal((await (await call(b,'farms')).json()).farms.length,0);
 assert.equal((await call(a,'feedback','POST',{message:'Private feedback'})).status,201);
 assert.equal((await (await call(b,'feedback')).json()).reports.length,0);
 assert.equal((await call(a,'rotation','PUT',{planId:'balanced'})).status,200);
 assert.equal((await call(a,'profile','PATCH',{language:'bn'})).status,200);
 assert.equal((await (await call(a,'profile')).json()).profile.language,'bn');
 assert.equal((await call(a,'profile','PATCH',{language:'en'})).status,200);
 const badLogin=client();assert.equal((await call(badLogin,'auth/login','POST',{phone:account.phone,password:'incorrect-password-here'})).status,401);
 const forged=client([['harvestv-auth','f'.repeat(64)]]);assert.equal((await call(forged,'profile')).status,401);
 const expired=client();await call(expired,'auth/login','POST',{phone:account.phone,password});db().prepare('UPDATE sessions SET expires_at=0 WHERE token_hash=?').run(createHash('sha256').update(expired.values.get('harvestv-auth')).digest('hex'));assert.equal((await call(expired,'profile')).status,401);
 const logoutToken=b.values.get('harvestv-auth');assert.equal((await call(b,'auth/logout','POST')).status,200);assert.equal((await call(client([['harvestv-auth',logoutToken]]),'profile')).status,401);
 for(let i=0;i<12;i++)var response=await call(anon,'auth/login','POST',{phone:'01912345678',password:'short'});assert.equal(response.status,429);
 fs.writeFileSync(fixture,JSON.stringify({cookies:[...a.values],password}));
 console.log('PASS: validation, duplicate phone normalization, hashing, session tokens, profile updates, farm ownership, feedback isolation, CSRF, wrong password, expiry, logout, and rate limiting.');
})().catch(error=>{console.error(error);process.exitCode=1;});
