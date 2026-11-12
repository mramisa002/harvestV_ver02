'use client';
import Link from 'next/link';
import {useProfile} from '@/lib/profile-context';
import {useLanguage} from '@/lib/language';
export function FarmerProfileText({field='name'}:{field?:'name'|'phone'|'initials'}){const {profile}=useProfile();const {t}=useLanguage();const text=field==='phone'?profile?.phone||t('Add phone number'):field==='initials'?profile?.name.split(/\s+/).slice(0,2).map(word=>Array.from(word)[0]).join('')||'👤':profile?.name||t('Your profile');return <Link href="/profile" className="farmer-profile-link" aria-label={t('Edit profile')}>{text}</Link>;}
