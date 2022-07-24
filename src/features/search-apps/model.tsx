import React, { useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useDebounce } from "shared/hooks/use-debounce"
import { fetcherApps } from "shared/lib/fetcher"

export const useSearchApps = () => {
  const [search, setSearch] = useState("")
  const searchValue = useDebounce({ value: search, delay: 500 })

  const { isSuccess, isLoading, data, fetchNextPage } = useInfiniteQuery(
    ["apps", searchValue],
    async ({ pageParam = 1 }) => {
      const limit = 15
      const res = await fetcherApps(
        `/app/search?query=${searchValue}&page=${pageParam}&limit=${limit}`
      )()
      return {
        data: res.data.data,
        nextPage: Number(res.data.page) + 1,
        isLastPage: Math.ceil(res.data.total / limit) === pageParam,
      }
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    }
  )

  return {
    search,
    onChangeSearch: setSearch,
    results: isSuccess ? data.pages : [],
    isLastPage: isSuccess && data.pages[data.pages.length - 1].isLastPage,
    isLoading,
    isSuccess,
    fetchNextPage: fetchNextPage,
  }
}
