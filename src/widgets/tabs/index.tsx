import React, { FC, HTMLAttributes } from "react"
import cn from "classnames"

import styles from "./styles.module.scss"

export interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  activeTab: number
  onTabClick: (index: number) => void
}

export const Tabs: FC<TabsProps> = ({ activeTab, onTabClick, ...props }) => {
  return (
    <ul className={styles.tabs} style={{ ...props.style }}>
      <li
        className={cn(styles.tabsTab, { [styles.active]: activeTab === 0 })}
        onClick={() => onTabClick(0)}
      >
        Channels
      </li>
      <li
        className={cn(styles.tabsTab, { [styles.active]: activeTab === 1 })}
        onClick={() => onTabClick(1)}
      >
        Groups
      </li>
      <li
        className={cn(styles.tabsTab, { [styles.active]: activeTab === 2 })}
        onClick={() => onTabClick(2)}
      >
        Bots
      </li>
    </ul>
  )
}
