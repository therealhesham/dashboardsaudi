//@ts-nocheck
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import React, { useContext, useEffect, useState } from 'react'
import { Windmill } from '@roketid/windmill-react-ui'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { User } from 'utils/usercontext';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
const[user,setUser]=useState({});

const router = useRouter()
  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) React.useLayoutEffect = React.useEffect;
// console.log(session)
const queryClient =new QueryClient;
useEffect(()=>{
  try {

    const token = Cookies.get("token")
  const decoder = jwtDecode(token);
  setUser(decoder)
router.replace("/admin")

  } catch (error) {
    router.replace("/login")
  }
  
},[])


  return (
    //@ts-ignore
<User.Provider value={user}>
<Windmill usePreferences={true} >
      <Component {...pageProps} />
    </Windmill>
  </User.Provider>
  
  )
}
export default MyApp
