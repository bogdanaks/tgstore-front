import React from "react"
import {
  IoHeartOutline,
  IoLayersOutline,
  IoSearchOutline,
} from "react-icons/io5"
import cn from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"

import styles from "./styles.module.scss"

export const Footer = () => {
  const router = useRouter()

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li
          className={cn(styles.footerListItem, {
            [styles.isActive]: router.asPath.includes("/apps"),
          })}
        >
          <Link href="/apps">
            <a>
              <IoLayersOutline fontSize={24} />
            </a>
          </Link>
        </li>
        <li
          className={cn(styles.footerListItem, {
            [styles.isActive]: router.asPath.includes("/favorites"),
          })}
        >
          <Link href="/favorites">
            <a>
              <IoHeartOutline fontSize={24} />
            </a>
          </Link>
        </li>
        <li
          className={cn(styles.footerListItem, {
            [styles.isActive]: router.asPath.includes("/search"),
          })}
        >
          <Link href="/search">
            <a>
              <IoSearchOutline fontSize={24} />
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
