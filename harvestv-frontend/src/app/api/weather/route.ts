import {coordinates,upstream,finite,apiFailure} from '@/lib/server/upstream';
import type {WeatherData} from '@/lib/live-types';
export const runtime='nodejs';
export const dynamic='force-dynamic';
type Raw = {error?:boolean;timezone:string;current?:Record<string,unknown>;daily?:Record<string,unknown[]>};
export async function GET(request:Request){try{
 const point=coordinates(new URL(request.url).searchParams);
 const url=new URL('https://api.open-meteo.com/v1/forecast');
 url.search=new URLSearchParams({...Object.fromEntries(Object.entries(point).map(([k,v])=>[k,String(v)])),current:'temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m',daily:'temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max,et0_fao_evapotranspiration',timezone:'auto',forecast_days:'7',past_days:'7'}).toString();
 const raw=await upstream<Raw>(url,30*60*1000);if(raw.error||!raw.current||!raw.daily||!Array.isArray(raw.daily.time))throw new Error('BAD_RESPONSE');
 const today=String(raw.current.time).slice(0,10);const daily=raw.daily;
 const days=daily.time.map((date,i)=>({date:String(date),min:finite(daily.temperature_2m_min?.[i]),max:finite(daily.temperature_2m_max?.[i]),rain:finite(daily.precipitation_sum?.[i]),rainProbability:finite(daily.precipitation_probability_max?.[i]),gusts:finite(daily.wind_gusts_10m_max?.[i]),et0:finite(daily.et0_fao_evapotranspiration?.[i])}));
 const past=days.filter(d=>d.date<today&&d.rain!==null);const forecast=days.filter(d=>d.date>=today).slice(0,7);if(!forecast.length)throw new Error('BAD_RESPONSE');
 const first=forecast[0];const indicators:WeatherData['indicators']=[];if(first.rainProbability!==null&&first.rainProbability>=60)indicators.push('rain');if(first.gusts!==null&&first.gusts>=35)indicators.push('wind');if(first.max!==null&&first.max>=35)indicators.push('heat');
 const result:WeatherData={source:'Open-Meteo',sourceUrl:'https://open-meteo.com/',fetchedAt:new Date().toISOString(),observedAt:String(raw.current.time),timezone:raw.timezone,coordinates:point,current:{temperature:finite(raw.current.temperature_2m),humidity:finite(raw.current.relative_humidity_2m),wind:finite(raw.current.wind_speed_10m),precipitation:finite(raw.current.precipitation),code:finite(raw.current.weather_code)},days:forecast,pastRain:{total:past.length?Number(past.reduce((s,d)=>s+d.rain!,0).toFixed(1)):null,days:past.length},indicators};
 return Response.json(result,{headers:{'Cache-Control':'private, max-age=300'}});
 }catch(error){return apiFailure(error);}}
