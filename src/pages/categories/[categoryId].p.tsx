import React, { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { AppList } from "entities/app/ui/app-list"
import { SkeletonAppsList } from "entities/app/ui/app-list/skeleton"
import { SkeletonAppRow } from "entities/app/ui/app-row/skeleton"
import { useRouter } from "next/router"
import { fetcher, fetcherApps } from "shared/lib/fetcher"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { Tabs } from "widgets/tabs"
import { useTabs } from "widgets/tabs/model"
import { TopBar } from "widgets/top-bar"

const CategoryPage = () => {
  const {
    query: { categoryId },
  } = useRouter()
  const { data: categories } = useQuery(
    ["categories"],
    fetcher<CategoryApp[]>("/app-category")
  )
  const { data: apps } = useQuery(
    ["apps", categoryId],
    fetcherApps(`/app?categoryId=${categoryId}`),
    {
      enabled: !(categoryId === undefined),
    }
  )

  const { activeTab, onTabClick } = useTabs()

  const categoryInfo = useMemo(() => {
    return categories?.find((item) => item.id === categoryId)
  }, [categories, categoryId])

  const channels = useMemo(() => {
    return apps?.data.data
      .map(
        (item) => item.type_id === "2" && item // 2 channel id
      )
      .filter(Boolean)
  }, [apps]) as WebApp[]

  const groups = useMemo(() => {
    return apps?.data.data
      .map((item) => item.type_id === "3" && item)
      .filter(Boolean) // 3 group id
  }, [apps]) as WebApp[]

  const bots = useMemo(() => {
    return (
      apps?.data.data
        .map((item) => item.type_id === "1" && item)
        .filter(Boolean) || []
    ) // 1 bot id
  }, [apps]) as WebApp[]

  return (
    <Wrapper style={{ padding: 0 }}>
      <TopBar
        title={categoryInfo?.title || "Category"}
        isBack={true}
        bottomContent={
          <Tabs
            activeTab={activeTab}
            onTabClick={onTabClick}
            style={{ marginBottom: 15 }}
          />
        }
      />
      <div style={{ padding: "20px", paddingBottom: 0, paddingTop: 10 }}>
        {(!channels || !groups || !bots) && (
          <ul>
            <SkeletonAppRow />
            <SkeletonAppRow />
            <SkeletonAppRow />
            <SkeletonAppRow />
          </ul>
        )}
        {activeTab === 0 && channels && <AppList apps={channels} />}
        {activeTab === 1 && groups && <AppList apps={groups} />}
        {activeTab === 2 && bots && <AppList apps={bots} />}
      </div>
      <Footer />
    </Wrapper>
  )
}

export default CategoryPage
