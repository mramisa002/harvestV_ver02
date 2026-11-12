'use client';
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {useLanguage} from './language';
export type FarmerProfile={name:string;phone:string;district:string;language:'en'|'bn';updatedAt:string};
export const authMessages:Record<string,string>={INVALID_NAME:'Enter your name (up to 100 characters).',INVALID_PHONE:'Enter a Bangladeshi mobile number, e.g. 01712345678.',INVALID_DISTRICT:'Select your district.',INVALID_LANGUAGE:'Select English or Bangla.',INVALID_PASSWORD:'Use a password with 15 to 128 characters.',PHONE_EXISTS:'An account with this phone number already exists. Please log in.',INVALID_CREDENTIALS:'The phone number or password is incorrect.',PHONE_IMMUTABLE:'Your login phone number cannot be changed here.',RATE_LIMITED:'Too many attempts. Please try again in 15 minutes.',UNAUTHORIZED:'Your session has expired. Please log in again.'};
const ProfileContext=createContext<{profile:FarmerProfile|null;loading:boolean;error:string;save:(name:string,phone:string,district:string,language:'en'|'bn')=>Promise<boolean>}>({profile:null,loading:true,error:'',save:async()=>false});
export function ProfileProvider({children}:{children:ReactNode}){
 const {setLanguage}=useLanguage();
 const [profile,setProfile]=useState<FarmerProfile|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState('');
 useEffect(()=>{const controller=new AbortController();fetch('/api/profile',{signal:controller.signal,cache:'no-store'}).then(async response=>{if(response.status===401)return;if(!response.ok)throw new Error();const value=(await response.json()).profile;setProfile(value);if(value)setLanguage(value.language);}).catch(cause=>{if(cause.name!=='AbortError')setError('Could not load your profile. Please reload and try again.');}).finally(()=>{if(!controller.signal.aborted)setLoading(false);});return()=>controller.abort();},[]);
 async function save(name:string,phone:string,district:string,language:'en'|'bn'){setError('');try{const response=await fetch('/api/profile',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,phone,district,language})});const body=await response.json();if(!response.ok){setError(authMessages[body.error]||'Could not save your profile. Please try again.');return false;}setProfile(body.profile);setLanguage(body.profile.language);return true;}catch{setError('Could not save your profile. Please try again.');return false;}}
 return <ProfileContext.Provider value={{profile,loading,error,save}}>{children}</ProfileContext.Provider>;
}
export const useProfile=()=>useContext(ProfileContext);
