import React from "react"
import { AppDetail } from "entities/app/ui/app-detail"
import { Rating } from "entities/rating/ui"
import { ReviewCardList } from "entities/review/ui/review-card-list"
import { useRouter } from "next/router"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"

const AppDetailsPage = () => {
  const {
    query: { appId },
  } = useRouter()

  if (!appId) return null // TODO loader

  return (
    <Wrapper>
      <AppDetail appId={String(appId)} />
      <Rating appId={String(appId)} />
      <ReviewCardList />
      <Footer />
    </Wrapper>
  )
}

export default AppDetailsPage
