import React, { FC } from "react"
import Link from "next/link"

import { AppRow } from "../app-row"

import styles from "./styles.module.scss"

interface AppListProps {
  apps: WebApp[]
  title?: string
  seeAllLink?: string
}

export const AppList: FC<AppListProps> = ({ apps, title, seeAllLink }) => {
  return (
    <div className={styles.wrapper}>
      {title && (
        <div className={styles.header}>
          <h2>{title}</h2>
          <Link href={`/recommendations/${seeAllLink}`}>
            <a style={{ fontSize: "15px" }}>See All</a>
          </Link>
        </div>
      )}
      {!apps.length && <span className={styles.noApps}>No apps</span>}
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
