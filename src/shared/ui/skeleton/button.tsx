import React, { FC } from "react"

import styles from "./styles.module.scss"

interface SkeletonButtonProps {}

export const SkeletonButton: FC<SkeletonButtonProps> = () => {
  return <div className={styles.button} />
}
