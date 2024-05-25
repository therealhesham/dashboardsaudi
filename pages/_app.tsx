import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import React from 'react'
import { Windmill } from '@roketid/windmill-react-ui'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) React.useLayoutEffect = React.useEffect;
console.log(session)
  return (

    <SessionProvider session={session}>
<Windmill usePreferences={true} >
      <Component {...pageProps} />

    </Windmill>
    </SessionProvider>
  )
}
export default MyApp
