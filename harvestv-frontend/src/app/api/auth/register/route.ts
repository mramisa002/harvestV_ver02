import {authRequest} from '@/lib/server/auth';
export const runtime='nodejs';
export async function POST(request:Request){return authRequest(request,'register');}
