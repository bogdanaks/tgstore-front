import React, { FC } from "react"

import styles from "./styles.module.scss"

interface SkeletonImageProps {
  width: number
  height: number
}

export const SkeletonImage: FC<SkeletonImageProps> = ({ width, height }) => {
  return (
    <div
      className={styles.image}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}
