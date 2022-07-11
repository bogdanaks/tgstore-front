import { makeAutoObservable } from "mobx"
import { getAppById } from "shared/api"

class AppClass {
  constructor() {
    makeAutoObservable(this)
  }

  public async getAppById(appId: string) {
    return await getAppById(appId)
  }
}

const AppStore = new AppClass()

export { AppStore }
