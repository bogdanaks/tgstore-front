import React from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

interface LocationProviderProps {
  children: React.ReactNode
}

enum BrowserType {
  TELEGRAM = "TELEGRAM",
  BROWSER = "BROWSER",
}

const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [browserType, setBrowserType] = React.useState(BrowserType.BROWSER)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const type = !window.Telegram.WebApp.initData.length
        ? BrowserType.BROWSER
        : BrowserType.TELEGRAM

      setBrowserType(type)
    }
  }, [])

  if (browserType === BrowserType.BROWSER) {
    return <>{children}</>
  } else {
    return <LocationProviderInner>{children}</LocationProviderInner>
  }
}

let isFirstLoaded = false

const LocationProviderInner: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const router = useRouter()

  const redirectToLastPage = () => {
    const currentLocation = Cookies.get("location")
    if (!currentLocation) return
    router.replace(currentLocation)
  }

  React.useEffect(() => {
    if (!isFirstLoaded) redirectToLastPage()
    isFirstLoaded = true

    Cookies.set("location", location.pathname, {
      expires: new Date(new Date().getTime() + 10 * 60 * 1000), // 10 min
    })
  }, [router.asPath])

  return <>{children}</>
}

export default LocationProvider
