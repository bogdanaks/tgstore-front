import React, { useEffect } from "react"
import { AppList } from "entities/app/ui/app-list"
import { SkeletonAppsList } from "entities/app/ui/app-list/skeleton"
import { useSearchApps } from "features/search-apps/model"
import { Wrapper } from "shared/ui/wrapper"
import { Footer } from "widgets/footer"
import { Search } from "widgets/search/ui"
import { TopBar } from "widgets/top-bar"

const SearchPage = () => {
  const {
    search,
    onChangeSearch,
    isLoading,
    isSuccess,
    isLastPage,
    results,
    fetchNextPage,
  } = useSearchApps()

  const handleScroll = () => {
    const userScrollHeight = window.innerHeight + window.scrollY
    const windowBottomHeight = document.documentElement.offsetHeight

    if (userScrollHeight + 2 >= windowBottomHeight) {
      fetchNextPage()
    }
  }

  useEffect(() => {
    if (isLastPage) return
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isLastPage])

  return (
    <Wrapper style={{ padding: 0 }}>
      <TopBar
        title="Search"
        bottomContent={
          <div style={{ width: "100%" }}>
            <Search
              value={search}
              onChange={(e) => onChangeSearch(e.target.value)}
              autoFocus
            />
          </div>
        }
      />
      <div style={{ padding: 20, paddingTop: 0 }}>
        {isLoading && <SkeletonAppsList />}
        {isSuccess && (
          <>
            {results.map(({ data }, index) => (
              <AppList key={index} apps={data} />
            ))}
          </>
        )}
      </div>
      <Footer />
    </Wrapper>
  )
}

export default SearchPage
