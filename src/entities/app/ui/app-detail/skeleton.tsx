import React from "react"
import Skeleton from "shared/ui/skeleton"

import styles from "./styles.module.scss"

export const AppDetailSkeleton = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <div className={styles.headerImage}>
            <Skeleton.Image height={80} width={80} />
          </div>
          <div className={styles.headerContainer}>
            <div className={styles.headerInfo}>
              <Skeleton.Paragraph />
            </div>
            <div className={styles.bottomRow}>
              <Skeleton.Paragraph />
            </div>
          </div>
        </div>
        <div className={styles.hr} />
      </div>
      <div className={styles.body}>
        <div className={styles.bodyDescription}>
          <Skeleton.Paragraph />
        </div>
      </div>
      <div className={styles.hr} />
    </>
  )
}
