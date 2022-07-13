import type { AppProps } from "next/app"
import LocationProvider from "processes/location"

import "/styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocationProvider>
      <Component {...pageProps} />
    </LocationProvider>
  )
}

export default MyApp
