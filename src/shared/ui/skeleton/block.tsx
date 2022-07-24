import React, { FC, HTMLAttributes } from "react"

import styles from "./styles.module.scss"

interface SkeletonBlockProps extends HTMLAttributes<HTMLDivElement> {}

export const SkeletonBlock: FC<SkeletonBlockProps> = ({ ...props }) => {
  return <div className={styles.block} {...props} />
}
