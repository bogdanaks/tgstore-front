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
  const {
    isLoading: isLoadingCat,
    isSuccess: isSuccessCat,
    data: categories,
  } = useQuery(["categories"], fetcher<CategoryApp[]>("/app-category"))
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

  // const apps = [
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "Audio Bot",
  //     short_description: "Бот позволяет слушать музыку из VK без ограничений!",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "Random Key Generator",
  //     short_description:
  //       "Generate random keys/passwords on the air! Enter length and select method to create one.",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "MeteoBot",
  //     short_description: "Я покажу погоду в твоём городе!",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "HomeBro Аренда 🏠",
  //     short_description: "Персональный помощник по поиску жилья 🏡",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "MeteoBot",
  //     short_description: "Я покажу погоду в твоём городе!",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "HomeBro Аренда 🏠",
  //     short_description: "Персональный помощник по поиску жилья 🏡",
  //   },
  //   ,
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "HomeBro Аренда 🏠",
  //     short_description: "Персональный помощник по поиску жилья 🏡",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "MeteoBot",
  //     short_description: "Я покажу погоду в твоём городе!",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "HomeBro Аренда 🏠",
  //     short_description: "Персональный помощник по поиску жилья 🏡",
  //   },
  //   ,
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "HomeBro Аренда 🏠",
  //     short_description: "Персональный помощник по поиску жилья 🏡",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "MeteoBot",
  //     short_description: "Я покажу погоду в твоём городе!",
  //   },
  //   {
  //     id: "16",
  //     image_url: "/noimage.webp",
  //     title: "HomeBro Аренда 🏠",
  //     short_description: "Персональный помощник по поиску жилья 🏡",
  //   },
  // ] as WebApp[]

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
