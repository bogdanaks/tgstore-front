import React, { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { AppList } from "entities/app/ui/app-list"
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
  const {
    isLoading: isLoadingApps,
    isSuccess: isSuccessApps,
    data: apps,
  } = useQuery(
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

  if (!categoryInfo || !apps) return null

  return (
    <Wrapper style={{ padding: 0 }}>
      <TopBar
        title={categoryInfo.title}
        isBack={true}
        tabs={
          <Tabs
            activeTab={activeTab}
            onTabClick={onTabClick}
            style={{ marginBottom: 15 }}
          />
        }
      />
      <div style={{ padding: "20px", paddingBottom: 0, paddingTop: 10 }}>
        {activeTab === 0 && <AppList apps={apps.data} />}
        {activeTab === 1 && <span>2</span>}
        {activeTab === 2 && <span>3</span>}
      </div>
      <Footer />
    </Wrapper>
  )
}

export default CategoryPage
