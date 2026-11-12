import {coordinates,upstream,finite,apiFailure} from '@/lib/server/upstream';
import type {ClimateData} from '@/lib/live-types';
export const runtime='nodejs';export const dynamic='force-dynamic';
type Raw = {properties?:{parameter?:Record<string,Record<string,number>>};parameters?:Record<string,{units?:string}>};
export async function GET(request:Request){try{
 const point=coordinates(new URL(request.url).searchParams);
 const end=new Date();end.setUTCDate(end.getUTCDate()-7);const start=new Date(end);start.setUTCDate(start.getUTCDate()-59);
 const date=(d:Date)=>d.toISOString().slice(0,10);const compact=(d:Date)=>date(d).replaceAll('-','');
 const url=new URL('https://power.larc.nasa.gov/api/temporal/daily/point');url.search=new URLSearchParams({latitude:String(point.latitude),longitude:String(point.longitude),parameters:'T2M,RH2M,PRECTOTCORR,ALLSKY_SFC_SW_DWN',community:'AG',start:compact(start),end:compact(end),format:'JSON'}).toString();
 const raw=await upstream<Raw>(url,24*60*60*1000);const values=raw.properties?.parameter;if(!values?.T2M)throw new Error('BAD_RESPONSE');
 const series=(key:string)=>Object.values(values[key]||{}).map(finite).filter((v):v is number=>v!==null);const average=(a:number[])=>a.length?Number((a.reduce((s,v)=>s+v,0)/a.length).toFixed(1)):null;
 const temperature=series('T2M'),rain=series('PRECTOTCORR');if(!temperature.length)throw new Error('BAD_RESPONSE');
 const result:ClimateData={source:'NASA POWER',sourceUrl:'https://power.larc.nasa.gov/',fetchedAt:new Date().toISOString(),coordinates:point,start:date(start),end:date(end),days:temperature.length,rainfallDays:rain.length,expectedDays:60,meanTemperature:average(temperature),rainfallTotal:rain.length?Number(rain.reduce((s,v)=>s+v,0).toFixed(1)):null,humidity:average(series('RH2M')),solarRadiation:average(series('ALLSKY_SFC_SW_DWN')),solarUnit:raw.parameters?.ALLSKY_SFC_SW_DWN?.units||''};return Response.json(result,{headers:{'Cache-Control':'private, max-age=3600'}});
 }catch(error){return apiFailure(error);}}
