import React from "react"
import { SkeletonButton } from "shared/ui/skeleton/button"
import { SkeletonImage } from "shared/ui/skeleton/image"
import { SkeletonParagraph } from "shared/ui/skeleton/paragraph"

import styles from "./skeleton.module.scss"

export const SkeletonAppsList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <SkeletonParagraph height={30} />
        </div>
        <SkeletonButton />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <SkeletonImage height={50} width={50} />
          <div className={styles.listItemInfo}>
            <div className={styles.listItemInfoTitle}>
              <SkeletonParagraph />
            </div>
            <div className={styles.listItemInfoDesc}>
              <SkeletonParagraph />
            </div>
          </div>
        </li>
        <li className={styles.listItem}>
          <SkeletonImage height={50} width={50} />
          <div className={styles.listItemInfo}>
            <div className={styles.listItemInfoTitle}>
              <SkeletonParagraph />
            </div>
            <div className={styles.listItemInfoDesc}>
              <SkeletonParagraph />
            </div>
          </div>
        </li>
        <li className={styles.listItem}>
          <SkeletonImage height={50} width={50} />
          <div className={styles.listItemInfo}>
            <div className={styles.listItemInfoTitle}>
              <SkeletonParagraph />
            </div>
            <div className={styles.listItemInfoDesc}>
              <SkeletonParagraph />
            </div>
          </div>
        </li>
        <li className={styles.listItem}>
          <SkeletonImage height={50} width={50} />
          <div className={styles.listItemInfo}>
            <div className={styles.listItemInfoTitle}>
              <SkeletonParagraph />
            </div>
            <div className={styles.listItemInfoDesc}>
              <SkeletonParagraph />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
