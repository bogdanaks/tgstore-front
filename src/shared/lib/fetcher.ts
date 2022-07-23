import { config } from "shared/config"

export const fetcher = <T>(url: string) => (): Promise<T> => {
  return fetch(`${config.API_URL}${url}`).then((res) => res.json())
}
