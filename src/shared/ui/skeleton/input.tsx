import React, { FC } from "react"

import styles from "./styles.module.scss"

interface SkeletonInputProps {}

export const SkeletonInput: FC<SkeletonInputProps> = () => {
  return <div className={styles.input} />
}
