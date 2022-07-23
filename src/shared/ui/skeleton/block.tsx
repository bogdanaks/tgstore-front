import React, { FC } from "react"

import styles from "./styles.module.scss"

interface SkeletonBlockProps {}

export const SkeletonBlock: FC<SkeletonBlockProps> = () => {
  return <div className={styles.block} />
}
