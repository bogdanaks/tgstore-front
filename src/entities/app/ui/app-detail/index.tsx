import React, { FC } from "react"
import { Favorite } from "features/add-to-favorite/ui"
import { getTwoCharacter } from "shared/lib/get-two-characters"
import { AppImage } from "shared/ui/app-image"

import styles from "./styles.module.scss"

interface AppDetailProps {
  app: WebApp
}

export const AppDetail: FC<AppDetailProps> = ({ app }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <div className={styles.headerImage}>
            <AppImage
              imageUrl={app.image_url}
              alt={app.title}
              height={80}
              width={80}
              noImageTitle={getTwoCharacter(app.title)}
            />
          </div>
          <div className={styles.headerContainer}>
            <div className={styles.headerInfo}>
              <h6 className={styles.headerInfoTitle}>{app.title}</h6>
            </div>
            <div className={styles.bottomRow}>
              <p className={styles.bottomRowType}>{app.type.title}</p>
              <div className={styles.bottomRowFavorite}>
                <Favorite app_id={app.id} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hr} />
      </div>
      <div className={styles.body}>
        <div className={styles.bodyDescription}>
          <p>{app.description}</p>
        </div>
      </div>
      <div className={styles.hr} />
    </>
  )
}
