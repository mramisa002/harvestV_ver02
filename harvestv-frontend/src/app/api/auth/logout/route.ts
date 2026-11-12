import {logout} from '@/lib/server/auth';
import {validWrite} from '@/lib/server/database';
export const runtime='nodejs';
export async function POST(request:Request){if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});await logout();return Response.json({success:true},{headers:{'Cache-Control':'no-store'}});}
