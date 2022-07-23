import React, { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { AppList } from "entities/app/ui/app-list"
import { TgStore } from "entities/telegram/model"
import { fetcherWithUserId } from "shared/lib/fetcher"
import { PageTitle } from "shared/ui/page-title"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { Tabs } from "widgets/tabs"
import { useTabs } from "widgets/tabs/model"

const FavoritesPage = () => {
  const { activeTab, onTabClick } = useTabs()
  const { data: favorites } = useQuery(
    ["favorites"],
    fetcherWithUserId<{ data: FavoriteWebApp[] }>(
      "/favorite",
      TgStore.data?.user.id
    ),
    {
      enabled: !!TgStore.data?.user.id,
    }
  )

  const channels = useMemo(() => {
    return favorites?.data
      .map(
        (item) => item.app.type_id === "2" && item.app // 2 channel id
      )
      .filter(Boolean)
  }, [favorites]) as WebApp[]

  const groups = useMemo(() => {
    return favorites?.data
      .map((item) => item.app.type_id === "3" && item.app)
      .filter(Boolean) // 3 group id
  }, [favorites]) as WebApp[]

  const bots = useMemo(() => {
    return (
      favorites?.data
        .map((item) => item.app.type_id === "1" && item.app)
        .filter(Boolean) || []
    ) // 1 bot id
  }, [favorites]) as WebApp[]

  return (
    <Wrapper>
      <PageTitle title="Favorites" />
      <Tabs activeTab={activeTab} onTabClick={onTabClick} />
      {activeTab === 0 && channels && <AppList apps={channels} />}
      {activeTab === 1 && groups && <AppList apps={groups} />}
      {activeTab === 2 && bots && <AppList apps={bots} />}
      <Footer />
    </Wrapper>
  )
}

export default FavoritesPage
