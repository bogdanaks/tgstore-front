import { AppStore } from "entities/app/model"
import { makeAutoObservable } from "mobx"
import { mockUserData } from "shared/mock"

class TgStoreClass {
  public webApp: TgWebApp | null = null
  public data: TgWebApp["initDataUnsafe"] | null = null

  constructor() {
    makeAutoObservable(this)
    this.fetchInformation()
  }

  private fetchInformation() {
    if (typeof window !== "undefined") {
      this.webApp = window.Telegram.WebApp

      if (Object.keys(window.Telegram.WebApp.initDataUnsafe).length) {
        this.data = window.Telegram.WebApp.initDataUnsafe
      } else {
        this.data = mockUserData
      }
    }
  }

  async openApp(appId: string, link: string) {
    if (!this.data?.user.id) return
    
    await AppStore.addViewer({ app_id: appId, user_id: this.data.user.id })
    this.webApp?.openTelegramLink(`https://t.me/${link}`)
  }
}

export const TgStore = new TgStoreClass()
