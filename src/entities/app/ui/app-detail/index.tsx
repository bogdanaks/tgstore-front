import React, { FC } from "react"
import { AppStore } from "entities/app/model"
import { getTwoCharacter } from "shared/lib/get-two-characters"
import { AppImage } from "shared/ui/app-image"
import { WebApp } from "shared-kernel"

import styles from "./styles.module.scss"

interface AppDetailProps {
  appId: string
}

export const AppDetail: FC<AppDetailProps> = ({ appId }) => {
  const [app, setApp] = React.useState<WebApp | null>(null)
  React.useEffect(() => {
    ;(async () => {
      const res = await AppStore.getAppById(appId)
      setApp(res)
    })()
  }, [appId])

  if (!app) return null // TODO loader

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <div className={styles.headerImage}>
            <AppImage
              imageUrl={"/images/noimage.webp"}
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
                {/* <Button onClick={handleFavoriteClick} variant="text">
                  {!isFavorite && (
                    <i className={styles.heartOutline}>
                      <IoHeartOutline fontSize={24} />
                    </i>
                  )}
                  {isFavorite && (
                    <i className={styles.heartContained}>
                      <IoHeart fontSize={24} />
                    </i>
                  )}
                </Button> */}
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
