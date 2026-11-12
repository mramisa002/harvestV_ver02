"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { bangla } from './bangla';
import type { Language } from './content';
const LanguageContext=createContext<{language:Language;setLanguage:(value:Language)=>void;t:(text:string)=>string}>({language:'en',setLanguage:()=>{},t:text=>text});
export function translate(text:string,language:Language){
 if(language==='en')return text;
 const coordinates=text.match(/^Device location: (.+)\. Confirm your farm location separately\.$/);
 if(coordinates)return `ডিভাইসের অবস্থান: ${coordinates[1]}। খামারের অবস্থান আলাদাভাবে নিশ্চিত করুন।`;
 if(text.startsWith('Mungbean adds a legume after '))return 'মুগডাল ডালজাতীয় ফসল যোগ করে এবং আগের ফসলের তুলনায় বৈচিত্র্য বাড়ায়।';
 if(text.startsWith('Soil: '))return 'সংরক্ষিত মাটি ও পিএইচ তথ্য দেখে বপনের সময়, বীজ, রোগ, সংরক্ষণ ও স্থানীয় ঝুঁকি কৃষি কর্মকর্তার সঙ্গে নিশ্চিত করুন।';
 if(text.startsWith('Uses the saved '))return 'সংরক্ষিত পানির উৎস ব্যবহার করে এবং পরপর তিন মৌসুম একই ধরনের দানাদার ফসল এড়ায়।';
 if(text.startsWith('Changes crop families after '))return 'বর্তমান ফসলের পর ভিন্ন ফসল পরিবার যোগ করে।';
 if(text.startsWith('District: '))return 'সংরক্ষিত জেলার বাজার, বন্যার ঝুঁকি এবং ধানের জাতের সময়সীমা স্থানীয়ভাবে যাচাই করুন।';
 const key=text.trim();const translated=bangla[key];
 if(translated)return text.replace(key,translated);
 if(/^[\d\s.,%°–−+→~:()/-]+$/.test(key))return text.replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[Number(d)]);
 return text;
}
export function LanguageProvider({children}:{children:ReactNode}){
 const [language,updateLanguage]=useState<Language>('en');
 const [preferenceError,setPreferenceError]=useState('');
 useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem('harvestv-language')||'"en"');if(saved==='en'||saved==='bn')updateLanguage(saved);}catch{}},[]);
 function setLanguage(next:Language){updateLanguage(next);try{localStorage.setItem('harvestv-language',JSON.stringify(next));}catch{}setPreferenceError('');fetch('/api/profile',{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({language:next})}).then(response=>{if(!response.ok&&response.status!==401)setPreferenceError('Could not save your language preference. Please try again.');}).catch(()=>setPreferenceError('Could not save your language preference. Please try again.'));}
 useEffect(()=>{document.documentElement.lang=language;},[language]);
 return <LanguageContext.Provider value={{language,setLanguage,t:text=>translate(text,language)}}>{preferenceError&&<p className="live-error" role="alert">{preferenceError}</p>}{children}</LanguageContext.Provider>;
}
export const useLanguage=()=>useContext(LanguageContext);
export function T({text}:{text:string}){return useLanguage().t(text);}
