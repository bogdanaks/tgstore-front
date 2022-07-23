import React, { FC } from "react"

import { AppRow } from "../app-row"

import styles from "./styles.module.scss"

interface AppListProps {
  apps: WebApp[]
  title?: string
}

export const AppList: FC<AppListProps> = ({ apps, title }) => {
  return (
    <div className={styles.wrapper}>
      {title && (
        <div className={styles.header}>
          <h2>{title}</h2>
          <button style={{ fontSize: "15px" }}>See All</button>
        </div>
      )}
      <ul>
        {apps.map((app, index) => (
          <AppRow
            key={index}
            id={app.id}
            imageUrl={app.image_url}
            shortDescription={app.short_description}
            title={app.title}
          />
        ))}
      </ul>
    </div>
  )
}
