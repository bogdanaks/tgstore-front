import React from "react"
import { useQuery } from "@tanstack/react-query"
import { CategoryList } from "entities/category/ui/category-list"
import { fetcher } from "shared/lib/fetcher"
import Skeleton from "shared/ui/skeleton"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"

const CategoriesPage = () => {
  const { isLoading, isSuccess, data } = useQuery(
    ["categories"],
    fetcher<CategoryApp[]>("/app-category")
  )

  return (
    <Wrapper>
      <h1 style={{ marginBottom: "20px" }}>Categories</h1>
      {isLoading && <Skeleton.CategoryList />}
      {isSuccess && <CategoryList list={data} />}
      <Footer />
    </Wrapper>
  )
}

export default CategoriesPage
