import React, { FC, ReactNode } from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import { useRouter } from "next/router"

import styles from "./styles.module.scss"

interface TopBarProps {
  title: string
  isBack?: boolean
  bottomContent?: JSX.Element
}

export const TopBar: FC<TopBarProps> = ({
  title,
  bottomContent,
  isBack = true,
}) => {
  const router = useRouter()

  const handleBackClick = () => {
    if (router.route === "/apps/[appId]") {
      router.replace("/apps")
      return
    }

    if (router.route === "/categories/[categoryId]") {
      router.replace("/categories")
      return
    }

    router.back()
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.topBarBar}>
        {isBack && (
          <i className={styles.topBarBack} onClick={handleBackClick}>
            <IoChevronBackOutline />
          </i>
        )}
        <span>{title}</span>
      </div>
      {bottomContent && bottomContent}
    </div>
  )
}
