'use client';
import {useState,type FormEvent} from 'react';
import Link from 'next/link';
import {useLanguage} from '@/lib/language';
import {authMessages} from '@/lib/profile-context';
import {bangladeshDivisions} from '@/lib/bangladesh';
export function AuthForm({register=false}:{register?:boolean}){
 const {t,language,setLanguage}=useLanguage();const [busy,setBusy]=useState(false),[error,setError]=useState(''),[success,setSuccess]=useState('');
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();setError('');setSuccess('');setBusy(true);const values=Object.fromEntries(new FormData(event.currentTarget));
  if(register&&values.password!==values.confirmPassword){setError('The passwords do not match.');setBusy(false);return;}
  try{const response=await fetch('/api/auth/'+(register?'register':'login'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(values)});const body=await response.json();if(!response.ok){setError(authMessages[body.error]||'Could not reach the account service. Please try again.');setBusy(false);return;}
   setSuccess(register?'Account created. Opening your profile…':'Logged in. Loading your saved information…');
   try{for(const key of Object.keys(localStorage))if(key.startsWith('harvestv-')&&key!=='harvestv-language')localStorage.removeItem(key);localStorage.setItem('harvestv-language',JSON.stringify(body.profile.language));}catch{}
   const next=new URLSearchParams(window.location.search).get('next');const allowed=['/profile','/my-farm','/dashboard','/feedback','/crop-rotation','/information-check'];window.location.assign(next&&allowed.includes(next)?next:'/profile');
  }catch{setError('Could not reach the account service. Please try again.');setBusy(false);}
 }
 return <main className="functional-page"><header className="profile-page-nav"><Link href="/">← {t('Home')}</Link><div className="language-switch"><button onClick={()=>setLanguage('en')} aria-pressed={language==='en'}>EN</button><button onClick={()=>setLanguage('bn')} aria-pressed={language==='bn'}>বাংলা</button></div></header><p className="eyebrow">HARVESTV</p><h1>{t(register?'Create your account':'Log in')}</h1><p>{t(register?'Save your profile and farms securely.':'Log in to load your saved profile and farms.')}</p><form onSubmit={submit} className="check-form profile-form">
 {register&&<label>{t('Your name')}<input name="name" autoComplete="name" required maxLength={100}/></label>}
 <label>{t('Bangladeshi phone number')}<input name="phone" type="tel" autoComplete="tel" placeholder="01712345678" required maxLength={30}/></label>
 {register&&<><label>{t('District')}<select name="district" required defaultValue=""><option value="" disabled>{t('Select your district')}</option>{bangladeshDivisions.flatMap(d=>d.districts.map(([name,bn])=><option key={name} value={name}>{language==='bn'?bn:name}</option>))}</select></label><label>{t('Language')}<select name="language" defaultValue={language}><option value="en">English</option><option value="bn">বাংলা</option></select></label></>}
 <label>{t('Password')}<input name="password" type="password" autoComplete={register?'new-password':'current-password'} required minLength={15} maxLength={128}/><small>{t('Use 15–128 characters. A memorable passphrase works well.')}</small></label>
 {register&&<label>{t('Confirm password')}<input name="confirmPassword" type="password" autoComplete="new-password" required minLength={15} maxLength={128}/></label>}
 <div className="live-actions"><button className="button primary" type="submit" disabled={busy}>{t(busy?'Please wait…':register?'Create account':'Log in')}</button><Link className="button outlined" href={register?'/login':'/register'}>{t(register?'Already registered? Log in':'Create an account')}</Link></div>{error&&<p className="live-error" role="alert">{t(error)}</p>}{success&&<p className="live-success" role="status">{t(success)}</p>}
 </form></main>;
}
