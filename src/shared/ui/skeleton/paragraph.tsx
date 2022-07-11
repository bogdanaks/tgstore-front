import React, { FC } from "react"

import styles from "./styles.module.scss"

interface SkeletonParagraphProps {
  height?: number
}

export const SkeletonParagraph: FC<SkeletonParagraphProps> = ({
  height = 20,
}) => {
  return <div className={styles.paragraph} style={{ height: `${height}px` }} />
}
