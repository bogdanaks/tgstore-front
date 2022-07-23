import React, { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { AppList } from "entities/app/ui/app-list"
import { AppRow } from "entities/app/ui/app-row"
import { useRouter } from "next/router"
import { fetcher } from "shared/lib/fetcher"
import { Wrapper } from "shared/ui/wrapper"
import { TopBar } from "widgets/top-bar"

const RecommendationsPage = () => {
  const {
    query: { categoryId },
  } = useRouter()
  const { data: recommendationCategory } = useQuery(
    ["recommendation_categories", categoryId],
    fetcher<{ data: RecommendationCategory }>(
      `/recommendation/categories/${categoryId}`
    )
  )
  const { data: recommendationApps } = useQuery(
    ["recommendation_apps", categoryId],
    fetcher<{ data: RecommendationApp[] }>(
      `/recommendation?category_id=${categoryId}`
    )
  )

  const apps = useMemo(() => {
    return recommendationApps?.data.map((item) => item.app)
  }, [recommendationApps]) as WebApp[]

  if (!recommendationCategory || !recommendationApps) return null

  return (
    <Wrapper style={{ padding: 0 }}>
      <TopBar title={recommendationCategory.data.title} isBack={true} />
      <div style={{ padding: 20, paddingTop: 10 }}>
        <AppList apps={apps} />
      </div>
    </Wrapper>
  )
}

export default RecommendationsPage
