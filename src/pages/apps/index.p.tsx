import React, { useCallback, useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { AppList } from "entities/app/ui/app-list"
import { SkeletonAppsList } from "entities/app/ui/app-list/skeleton"
import { fetcher } from "shared/lib/fetcher"
import { PageTitle } from "shared/ui/page-title"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { Search } from "widgets/search/ui"

const AppsPage = () => {
  const {
    isLoading,
    isSuccess,
    data: recommendationCategories,
  } = useQuery(
    ["recommendation_categories"],
    fetcher<{ data: RecommendationCategory[] }>("/recommendation/categories")
  )
  const {
    isLoading: isLoadingRecApps,
    isSuccess: isSuccessRecApps,
    data: recommendationApps,
  } = useQuery(
    ["recommendation_apps"],
    fetcher<{ data: RecommendationApp[] }>("/recommendation")
  )

  const filterApps = useCallback(
    (categoryId: string): WebApp[] => {
      return (recommendationApps?.data
        .map((item) => item.category_id === categoryId && item.app)
        .filter(Boolean)
        .splice(0, 5) || []) as WebApp[]
    },
    [recommendationApps]
  )

  return (
    <Wrapper>
      <PageTitle title="Apps" />
      {isLoading && <SkeletonAppsList />}
      {isSuccess && (
        <>
          <Search />
          {recommendationCategories.data.map((categories, index) => (
            <AppList
              key={index}
              apps={filterApps(categories.id)}
              title={categories.title}
              seeAllLink={categories.id}
            />
          ))}
        </>
      )}
      <Footer />
    </Wrapper>
  )
}

export default AppsPage
