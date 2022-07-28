import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { AppDetail } from "entities/app/ui/app-detail"
import { AppDetailSkeleton } from "entities/app/ui/app-detail/skeleton"
import { Rating } from "entities/rating/ui"
import { ReviewCardList } from "entities/review/ui/review-card-list"
import { TgStore } from "entities/telegram/model"
import { useRouter } from "next/router"
import { fetcherAppById } from "shared/lib/fetcher"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { TopBar } from "widgets/top-bar"

const AppDetailsPage = () => {
  const {
    query: { appId },
  } = useRouter()
  const { data: app } = useQuery(
    ["apps", appId],
    fetcherAppById(`/app/${appId}`),
    {
      enabled: !(appId === undefined),
    }
  )

  React.useEffect(() => {
    if (!app) return

    TgStore.webApp?.MainButton.setText("Open app")
    TgStore.webApp?.MainButton.show()
    TgStore.webApp?.MainButton.onClick(() =>
      TgStore.openApp(app.data.id, app.data.link)
    )

    return () => {
      TgStore.webApp?.MainButton.hide()
    }
  }, [app])

  if (!app) {
    return (
      <Wrapper style={{ padding: "0" }}>
        <TopBar title="App" />
        <div style={{ padding: 20, paddingTop: 10 }}>
          <AppDetailSkeleton />
        </div>
        <Footer />
      </Wrapper>
    )
  }

  return (
    <Wrapper style={{ padding: "0" }}>
      <TopBar title={app.data.type.title} />
      <div style={{ padding: 20, paddingTop: 10 }}>
        <AppDetail app={app.data} />
        <Rating appId={String(appId)} />
        <ReviewCardList />
      </div>
      <Footer />
    </Wrapper>
  )
}

export default AppDetailsPage
