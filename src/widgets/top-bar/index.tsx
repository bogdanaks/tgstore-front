import React, { FC } from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import cn from "classnames"
import { useRouter } from "next/router"

import styles from "./styles.module.scss"

interface TopBarProps {
  title: string
  isTabs?: boolean
}

export const TopBar: FC<TopBarProps> = ({ title, isTabs = true }) => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.topBarBar}>
        <i className={styles.topBarBack} onClick={handleBackClick}>
          <IoChevronBackOutline />
        </i>
        <span>{title}</span>
      </div>
      {isTabs && (
        <ul className={styles.tabs}>
          <li className={cn(styles.tabsTab, styles.active)}>Channels</li>
          <li className={styles.tabsTab}>Groups</li>
          <li className={styles.tabsTab}>Bots</li>
        </ul>
      )}
    </div>
  )
}
