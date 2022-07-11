import { config } from "shared/config"
import { WebApp } from "shared-kernel"

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

export const getAppById = async (appId: string): Promise<WebApp> => {
  try {
    return await fetcher<WebApp>(`${config.API_URL}/app/${appId}`, { // TODO add type
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
  } catch (error) {
    if (error instanceof Response) {
      console.log(await error.text())
      
      const msg: ResponseError = JSON.parse(await error.text())
      const msgFormatting = Array.isArray(msg.message) ? msg.message.join(", ") : msg.message
      throw new Error(msgFormatting)
    }
    throw new Error(`Something went wrong: ${error}`)
  }
}