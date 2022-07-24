import React, { useCallback, useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { useQuery } from "@tanstack/react-query"
import { AppList } from "entities/app/ui/app-list"
import { SkeletonAppsList } from "entities/app/ui/app-list/skeleton"
import Link from "next/link"
import { fetcher } from "shared/lib/fetcher"
import { Input } from "shared/ui/input"
import { PageTitle } from "shared/ui/page-title"
import Skeleton from "shared/ui/skeleton"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { Search } from "widgets/search/ui"

import styles from "./styles.module.scss"

const AppsPage = () => {
  const {
    isLoading,
    isSuccess,
    data: recommendationCategories,
  } = useQuery(
    ["recommendation_categories"],
    fetcher<{ data: RecommendationCategory[] }>("/recommendation/categories")
  )
  const { data: recommendationApps } = useQuery(
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
      {isLoading && (
        <>
          <Skeleton.Block style={{ height: 35 }} />
          <SkeletonAppsList />
        </>
      )}
      {isSuccess && (
        <>
          <Link href="/search">
            <a className={styles.searchLink}>
              <div className={styles.wrapper}>
                <Input
                  style={{ height: 35 }}
                  placeholder="Search..."
                  leftContent={<IoSearchOutline />}
                />
              </div>
            </a>
          </Link>
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
