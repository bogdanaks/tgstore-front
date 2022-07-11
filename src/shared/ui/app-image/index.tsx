import Image from "next/image"
import React, { FC } from "react"

import styles from "./styles.module.scss"

interface AppImageProps {
  imageUrl?: string
  noImageTitle?: string
  alt: string
  width: number
  height: number
}

export const AppImage: FC<AppImageProps> = ({
  imageUrl,
  alt,
  width,
  height,
  noImageTitle,
}) => {
  return (
    <div
      className={styles.image}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {imageUrl && (
        <Image src={imageUrl} alt={alt} width={width} height={height} />
      )}
      {!imageUrl && (
        <div className={styles.noImage} style={{ fontSize: width / 2.5 }}>
          {noImageTitle}
        </div>
      )}
    </div>
  )
}
