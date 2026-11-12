import {withAuth} from '@/lib/server/auth';
import {db,owner,validWrite} from '@/lib/server/database';
import {rotationFor} from '@/lib/rotation';
import type {FarmRecord} from '@/lib/live-types';
export const runtime='nodejs';export const dynamic='force-dynamic';
async function GETHandler(){try{const user=await owner();const row=db().prepare('SELECT id,payload FROM farm_records WHERE owner=? AND active=1 ORDER BY updated_at DESC LIMIT 1').get(user) as {id:string;payload:string}|undefined;const legacy=!row?db().prepare('SELECT payload FROM farms WHERE owner=?').get(user) as {payload:string}|undefined:undefined;const selected=row?db().prepare('SELECT plan_id FROM rotation_plan_records WHERE owner=? AND farm_id=?').get(user,row.id) as {plan_id:string}|undefined:db().prepare('SELECT plan_id FROM rotation_plans WHERE owner=?').get(user) as {plan_id:string}|undefined;return Response.json({...rotationFor(row?JSON.parse(row.payload) as FarmRecord:legacy?JSON.parse(legacy.payload) as FarmRecord:null),savedPlanId:selected?.plan_id||null},{headers:{'Cache-Control':'no-store'}});}catch{return Response.json({error:'STORAGE_UNAVAILABLE'},{status:503});}}
async function PUTHandler(request:Request){if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});try{const body=await request.json();if(!['water-wise','balanced','diverse'].includes(body.planId))return Response.json({error:'INVALID_PLAN'},{status:400});const user=await owner();const farm=db().prepare('SELECT id FROM farm_records WHERE owner=? AND active=1').get(user) as {id:string}|undefined;if(!farm)return Response.json({error:'FARM_REQUIRED'},{status:409});const savedAt=new Date().toISOString();db().prepare('INSERT INTO rotation_plan_records(owner,farm_id,plan_id,saved_at) VALUES(?,?,?,?) ON CONFLICT(owner,farm_id) DO UPDATE SET plan_id=excluded.plan_id,saved_at=excluded.saved_at').run(user,farm.id,body.planId,savedAt);return Response.json({planId:body.planId,savedAt});}catch{return Response.json({error:'SAVE_FAILED'},{status:400});}}

export const GET=withAuth(GETHandler);

export const PUT=withAuth(PUTHandler);
