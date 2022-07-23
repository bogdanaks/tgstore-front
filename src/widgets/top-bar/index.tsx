import React, { FC, ReactNode } from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import { useRouter } from "next/router"

import styles from "./styles.module.scss"

interface TopBarProps {
  title: string
  isBack?: boolean
  tabs?: JSX.Element
}

export const TopBar: FC<TopBarProps> = ({ title, tabs, isBack = true }) => {
  const router = useRouter()

  const handleBackClick = () => {
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
      {tabs && tabs}
    </div>
  )
}
