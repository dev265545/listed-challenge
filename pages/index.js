import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getProviders, getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Home() {
  const { data: session } = useSession();
const router = useRouter();
console.log(session?.user?.uid)
useEffect(()=>{
if(session) router.push(`/Dashboard/${session.user.uid}`)
else{
  router.push('/login')
}
},[session])


  return (
   <div>

   </div>
  )
}

