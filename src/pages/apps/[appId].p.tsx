import React from "react"
import { AppDetail } from "entities/app/ui/app-detail"
import { Rating } from "entities/rating/ui"
import { ReviewCardList } from "entities/review/ui/review-card-list"
import { useRouter } from "next/router"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { TopBar } from "widgets/top-bar"

const AppDetailsPage = () => {
  const {
    query: { appId },
  } = useRouter()

  if (!appId) return null // TODO loader

  return (
    <Wrapper style={{ padding: "0" }}>
      <TopBar title="Audio Bot" />
      <div style={{ padding: 20, paddingTop: 10 }}>
        <AppDetail appId={String(appId)} />
        <Rating appId={String(appId)} />
        <ReviewCardList />
      </div>
      <Footer />
    </Wrapper>
  )
}

export default AppDetailsPage
