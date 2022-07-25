import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import InitProvider from "application/init"
import type { AppProps } from "next/app"
import LocationProvider from "processes/location"

const queryClient = new QueryClient()

import "/styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <InitProvider>
        <LocationProvider>
          <Component {...pageProps} />
        </LocationProvider>
      </InitProvider>
    </QueryClientProvider>
  )
}

export default MyApp
