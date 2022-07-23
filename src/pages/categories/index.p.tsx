import React from "react"
import { useQuery } from "@tanstack/react-query"
import { CategoryList } from "entities/category/ui/category-list"
import { SkeletonCategoryList } from "entities/category/ui/category-list/skeleton"
import { fetcher } from "shared/lib/fetcher"
import { PageTitle } from "shared/ui/page-title"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"

const CategoriesPage = () => {
  const { isLoading, isSuccess, data } = useQuery(
    ["categories"],
    fetcher<CategoryApp[]>("/app-category")
  )

  return (
    <Wrapper>
      <PageTitle title="Categories" />
      {isLoading && <SkeletonCategoryList />}
      {isSuccess && <CategoryList list={data} />}
      <Footer />
    </Wrapper>
  )
}

export default CategoriesPage
