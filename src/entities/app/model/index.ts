import { makeAutoObservable } from "mobx"
import { getAppById } from "shared/api"

class AppClass {
  constructor() {
    makeAutoObservable(this)
  }

  public async getAppById(appId: string) {
    return await getAppById(appId)
  }

  async addViewer({ user_id, app_id }: { user_id: number, app_id: string }): Promise<void> {
    // await addAppViewer({ user_id, app_id })
  }
}

export const AppStore = new AppClass()
