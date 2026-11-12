type CacheEntry = { expires:number; value:unknown };
const cache = new Map<string,CacheEntry>();
const pending = new Map<string,Promise<unknown>>();
export function coordinates(params:URLSearchParams){
 const lat=params.get('latitude'),lon=params.get('longitude');
 if(!lat?.trim()||!lon?.trim())throw new Error('INVALID_COORDINATES');
 const latitude=Number(lat),longitude=Number(lon);
 if(!Number.isFinite(latitude)||!Number.isFinite(longitude)||Math.abs(latitude)>90||Math.abs(longitude)>180)throw new Error('INVALID_COORDINATES');
 // Weather and climate providers only need approximate farm coordinates.
 return {latitude:Number(latitude.toFixed(2)),longitude:Number(longitude.toFixed(2))};
}
export async function upstream<T>(url:URL,ttl:number):Promise<T>{
 const key=url.toString();const entry=cache.get(key);
 if(entry&&entry.expires>Date.now())return entry.value as T;
 if(pending.has(key))return pending.get(key) as Promise<T>;
 const request=(async()=>{const response=await fetch(url,{signal:AbortSignal.timeout(18000),cache:'no-store',headers:{Accept:'application/json'}});if(!response.ok)throw new Error('UPSTREAM_UNAVAILABLE');const value:unknown=await response.json();if(cache.size>=128)cache.delete(cache.keys().next().value!);cache.set(key,{value,expires:Date.now()+ttl});return value;})();
 pending.set(key,request);try{return await request as T;}finally{pending.delete(key);}
}
export function finite(value:unknown):number|null{return typeof value==='number'&&Number.isFinite(value)&&value!==-999?value:null;}
export function apiFailure(error:unknown){const invalid=error instanceof Error&&error.message==='INVALID_COORDINATES';return Response.json({error:invalid?'INVALID_COORDINATES':'SERVICE_UNAVAILABLE'},{status:invalid?400:502,headers:{'Cache-Control':'no-store'}});}
