import React, { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { AppList } from "entities/app/ui/app-list"
import { useRouter } from "next/router"
import { fetcher } from "shared/lib/fetcher"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { TopBar } from "widgets/top-bar"

const CategoryPage = () => {
  const {
    query: { categoryId },
  } = useRouter()
  const { isLoading, isSuccess, data } = useQuery(
    ["categories"],
    fetcher<CategoryApp[]>("/app-category")
  )

  const apps = [
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "Audio Bot",
      short_description: "Бот позволяет слушать музыку из VK без ограничений!",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "Random Key Generator",
      short_description:
        "Generate random keys/passwords on the air! Enter length and select method to create one.",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "MeteoBot",
      short_description: "Я покажу погоду в твоём городе!",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "HomeBro Аренда 🏠",
      short_description: "Персональный помощник по поиску жилья 🏡",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "MeteoBot",
      short_description: "Я покажу погоду в твоём городе!",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "HomeBro Аренда 🏠",
      short_description: "Персональный помощник по поиску жилья 🏡",
    },
    ,
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "HomeBro Аренда 🏠",
      short_description: "Персональный помощник по поиску жилья 🏡",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "MeteoBot",
      short_description: "Я покажу погоду в твоём городе!",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "HomeBro Аренда 🏠",
      short_description: "Персональный помощник по поиску жилья 🏡",
    },
    ,
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "HomeBro Аренда 🏠",
      short_description: "Персональный помощник по поиску жилья 🏡",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "MeteoBot",
      short_description: "Я покажу погоду в твоём городе!",
    },
    {
      id: "16",
      image_url: "/noimage.webp",
      title: "HomeBro Аренда 🏠",
      short_description: "Персональный помощник по поиску жилья 🏡",
    },
  ] as WebApp[]

  const categoryInfo = useMemo(() => {
    return data?.find((item) => item.id === categoryId)
  }, [data, categoryId])

  if (!categoryInfo) return null

  return (
    <Wrapper style={{ padding: 0 }}>
      <TopBar title={categoryInfo.title} />
      <div style={{ padding: "20px", paddingBottom: 0, paddingTop: 10 }}>
        <AppList apps={apps} />
      </div>
      <Footer />
    </Wrapper>
  )
}

export default CategoryPage
