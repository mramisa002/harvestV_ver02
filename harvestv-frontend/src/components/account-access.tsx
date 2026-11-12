'use client';
import {useEffect,type ReactNode} from 'react';
import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {useProfile} from '@/lib/profile-context';
const privatePaths=['/profile','/my-farm','/dashboard','/feedback','/crop-rotation','/information-check'];
export function AccountAccess({children}:{children:ReactNode}){
 const {profile,loading,error}=useProfile(),path=usePathname(),router=useRouter();const restricted=privatePaths.includes(path);
 useEffect(()=>{if(restricted&&!loading&&!profile&&!error)router.replace('/login?next='+encodeURIComponent(path));},[restricted,loading,profile,error,path,router]);
 if(restricted&&!profile)return <main className="functional-page"><p role={error?'alert':'status'}>{error||'Loading your account…'}</p>{error&&<Link href="/login">Log in</Link>}</main>;
 return children;
}
