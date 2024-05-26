import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import React from 'react'
import { Windmill } from '@roketid/windmill-react-ui'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) React.useLayoutEffect = React.useEffect;
console.log(session)
const queryClient =new QueryClient;
  return (
    <SessionProvider session={session}>
<Windmill usePreferences={true} >
<QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
</QueryClientProvider>
    </Windmill>
    </SessionProvider>
  )
}
export default MyApp
