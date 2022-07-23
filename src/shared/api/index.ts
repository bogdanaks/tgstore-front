import { config } from "shared/config"

export interface ResponseError {
  error: string
  message: string | string[]
  statusCode: number
}

const fetcher = async <T>(input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init)

  if (!response.ok) {
    throw response
  }

  return response.json() as Promise<T>
}

export const fetchAppsByCategoryId = () => async (categoryId: string): Promise<WebApp[]> => {
  try {
    return await fetcher<WebApp[]>(`${config.API_URL}/app?categoryId=${categoryId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
  } catch (error) {
    if (error instanceof Response) {
      const msg: ResponseError = JSON.parse(await error.text())
      const msgFormatting = Array.isArray(msg.message) ? msg.message.join(", ") : msg.message
      throw new Error(msgFormatting)
    }
    throw new Error(`Something went wrong: ${error}`)
  }
}

export const getAppById = async (appId: string): Promise<WebApp> => {
  try {
    return await fetcher<WebApp>(`${config.API_URL}/app/${appId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
  } catch (error) {
    if (error instanceof Response) {
      const msg: ResponseError = JSON.parse(await error.text())
      const msgFormatting = Array.isArray(msg.message) ? msg.message.join(", ") : msg.message
      throw new Error(msgFormatting)
    }
    throw new Error(`Something went wrong: ${error}`)
  }
}

export const getCategories = async (): Promise<CategoryApp[]> => {
  try {
    return await fetcher<CategoryApp[]>(`${config.API_URL}/app-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
  } catch (error) {
    if (error instanceof Response) {
      const msg: ResponseError = JSON.parse(await error.text())
      const msgFormatting = Array.isArray(msg.message) ? msg.message.join(", ") : msg.message
      throw new Error(msgFormatting)
    }
    throw new Error(`Something went wrong: ${error}`)
  }
}

export const addToFavorite = async (app_id: string, userId: number | undefined): Promise<void> => {
  try {
    return await fetcher(`${config.API_URL}/favorite`, {
      method: "POST",
      body: JSON.stringify({
        app_id,
      }),
      headers: {
        "Content-Type": "application/json",
        tg_user_id: String(userId)
      },
    })
  } catch (error) {
    if (error instanceof Response) {
      const msg: ResponseError = JSON.parse(await error.text())
      const msgFormatting = Array.isArray(msg.message) ? msg.message.join(", ") : msg.message
      throw new Error(msgFormatting)
    }
    throw new Error(`Something went wrong: ${error}`)
  }
}

export const delFavorite = async (app_id: string, userId: number | undefined): Promise<void> => {
  try {
    return await fetcher(`${config.API_URL}/favorite/${app_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        tg_user_id: String(userId)
      },
    })
  } catch (error) {
    if (error instanceof Response) {
      const msg: ResponseError = JSON.parse(await error.text())
      const msgFormatting = Array.isArray(msg.message) ? msg.message.join(", ") : msg.message
      throw new Error(msgFormatting)
    }
    throw new Error(`Something went wrong: ${error}`)
  }
}

