import React, { useState } from "react"

export const useTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleClickTab = (index: number) => {
    setActiveTab(index)
  }

  return { activeTab, onTabClick: handleClickTab }
}
