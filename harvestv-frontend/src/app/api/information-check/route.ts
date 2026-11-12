import {withAuth} from '@/lib/server/auth';
import {randomUUID} from 'node:crypto';
import {checkAdvice} from '@/lib/advice-check';
import {db,owner,validWrite} from '@/lib/server/database';
export const runtime='nodejs';export const dynamic='force-dynamic';
async function POSTHandler(request:Request){if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});try{const text=await request.text();if(text.length>5000)return Response.json({error:'TOO_LARGE'},{status:413});const body=JSON.parse(text);if(typeof body.advice!=='string'||body.advice.trim().length<5||body.advice.length>2000||typeof(body.source??'')!=='string'||(body.source??'').length>500)return Response.json({error:'INVALID_ADVICE'},{status:400});const result=checkAdvice(body.advice);const record={advice:body.advice.trim(),source:(body.source||'').trim(),result,checkedAt:new Date().toISOString()};db().prepare('INSERT INTO information_checks(id,owner,payload,created_at) VALUES(?,?,?,?)').run(randomUUID(),await owner(),JSON.stringify(record),record.checkedAt);return Response.json(record);}catch{return Response.json({error:'CHECK_FAILED'},{status:400});}}

export const POST=withAuth(POSTHandler);
