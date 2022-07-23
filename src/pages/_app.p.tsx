import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import LocationProvider from "processes/location"

const queryClient = new QueryClient()

import "/styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <Component {...pageProps} />
      </LocationProvider>
    </QueryClientProvider>
  )
}

export default MyApp
