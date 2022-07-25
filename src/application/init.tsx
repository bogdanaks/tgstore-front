import React, { useState } from "react"
import { TgStore } from "entities/telegram/model"
import { Loader } from "shared/ui/loader"

interface InitProviderProps {
  children: React.ReactNode
}

const InitProvider: React.FC<InitProviderProps> = ({ children }) => {
  const [store, setStore] = useState<typeof TgStore | null>(null)

  React.useEffect(() => {
    if (typeof window === undefined) return
    window.Telegram.WebApp.expand()

    setStore(TgStore)
  }, [])

  if (!store || !store.data) return <Loader />

  return <>{children}</>
}

export default InitProvider