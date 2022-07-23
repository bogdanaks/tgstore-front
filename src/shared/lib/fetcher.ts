import { config } from "shared/config"

export const fetcher = <T>(url: string) => (): Promise<T> => {
  return fetch(`${config.API_URL}${url}`).then((res) => res.json())
}

export const fetcherWithUserId = <T>(url: string, user_id: number | undefined) => (): Promise<T> => {
  return fetch(`${config.API_URL}${url}`, {
    headers: {
      tg_user_id: String(user_id),
    },
  }).then((res) => res.json())
}

export const fetcherAppById = (url: string) => (): Promise<{ data: WebApp }> => {
  return fetch(`${config.API_URL}${url}`).then((res) => res.json())
}

export const fetcherApps = (url: string) => (): Promise<{
  data: WebApp[],
  page: number,
  limit: number,
  total: number,
}> => {
  return fetch(`${config.API_URL}${url}`).then((res) => res.json())
}
