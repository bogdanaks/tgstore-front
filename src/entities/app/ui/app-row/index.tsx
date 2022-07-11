import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { AppImage } from "shared/ui/app-image"

import styles from "./styles.module.scss"

interface AppRowProps {
  id: string
  title: string
  imageUrl: string
  shortDescription: string
}

export const AppRow: FC<AppRowProps> = ({
  id,
  title,
  imageUrl,
  shortDescription,
}) => {
  return (
    <Link href={`/apps/${id}`}>
      <li className={styles.appRow}>
        <AppImage
          imageUrl={`/images${imageUrl}`}
          noImageTitle="TA"
          alt={title}
          width={50}
          height={50}
        />
        <div className={styles.appRowInfo}>
          <h6 className={styles.appRowInfoTitle}>{title}</h6>
          <p className={styles.appRowInfoDesc}>{shortDescription}</p>
        </div>
      </li>
    </Link>
  )
}
