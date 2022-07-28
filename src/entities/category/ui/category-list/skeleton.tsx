import React from "react"
import Skeleton from "shared/ui/skeleton"

import styles from "./styles.module.scss"

export const SkeletonCategoryList = () => {
  return (
    <div className={styles.skeleton}>
      <ul className={styles.skeletonList}>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
        <li className={styles.skeletonListItem}>
          <Skeleton.Block />
        </li>
      </ul>
    </div>
  )
}
