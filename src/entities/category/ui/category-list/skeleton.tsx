import React from "react"
import { SkeletonBlock } from "shared/ui/skeleton/block"

import styles from "./styles.module.scss"

export const SkeletonCategoryList = () => {
  return (
    <div className={styles.skeleton}>
      <ul className={styles.skeletonList}>
        <li className={styles.skeletonListItem}>
          <SkeletonBlock />
        </li>
        <li className={styles.skeletonListItem}>
          <SkeletonBlock />
        </li>
        <li className={styles.skeletonListItem}>
          <SkeletonBlock />
        </li>
        <li className={styles.skeletonListItem}>
          <SkeletonBlock />
        </li>
      </ul>
    </div>
  )
}
