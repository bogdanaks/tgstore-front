import React from "react"
import Skeleton from "shared/ui/skeleton"

import { SkeletonAppRow } from "../app-row/skeleton"

import styles from "./skeleton.module.scss"

export const SkeletonAppsList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <Skeleton.Paragraph height={30} />
        </div>
        <Skeleton.Button />
      </div>
      <ul className={styles.list}>
        <SkeletonAppRow />
        <SkeletonAppRow />
        <SkeletonAppRow />
        <SkeletonAppRow />
      </ul>
    </div>
  )
}
