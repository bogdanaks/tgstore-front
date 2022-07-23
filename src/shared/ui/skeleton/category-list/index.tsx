import React from "react"

import { SkeletonBlock } from "../block"

import styles from "./styles.module.scss"

export const SkeletonCategoryList = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <SkeletonBlock />
        </li>
        <li className={styles.listItem}>
          <SkeletonBlock />
        </li>
        <li className={styles.listItem}>
          <SkeletonBlock />
        </li>
        <li className={styles.listItem}>
          <SkeletonBlock />
        </li>
      </ul>
    </div>
  )
}
