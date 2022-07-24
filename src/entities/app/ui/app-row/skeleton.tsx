import React, { FC, HTMLAttributes } from "react"
import Skeleton from "shared/ui/skeleton"

import styles from "./styles.module.scss"

interface SkeletonAppRowProps extends HTMLAttributes<HTMLLIElement> {}

export const SkeletonAppRow: FC<SkeletonAppRowProps> = (props) => {
  return (
    <li className={styles.skeletonItem} {...props}>
      <Skeleton.Image height={50} width={50} />
      <div className={styles.skeletonItemInfo}>
        <div className={styles.skeletonItemInfoTitle}>
          <Skeleton.Paragraph />
        </div>
        <div className={styles.skeletonItemInfoDesc}>
          <Skeleton.Paragraph />
        </div>
      </div>
    </li>
  )
}
