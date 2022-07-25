import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import InitProvider from "application/init"
import type { AppProps } from "next/app"
import Head from "next/head"
import LocationProvider from "processes/location"

const queryClient = new QueryClient()

import "/styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <InitProvider>
          <LocationProvider>
            <Component {...pageProps} />
          </LocationProvider>
        </InitProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
