import React from "react"
import { AppList } from "entities/app/ui/app-list"
import { PageTitle } from "shared/ui/page-title"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { Tabs } from "widgets/tabs"
import { useTabs } from "widgets/tabs/model"

const FavoritesPage = () => {
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
  ] as WebApp[]

  const { activeTab, onTabClick } = useTabs()

  return (
    <Wrapper>
      <PageTitle title="Favorites" />
      <Tabs activeTab={activeTab} onTabClick={onTabClick} />
      <AppList apps={apps} />
      <Footer />
    </Wrapper>
  )
}

export default FavoritesPage
