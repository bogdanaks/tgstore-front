import React from "react"
import {
  IoGridOutline,
  IoHeartOutline,
  IoLayersOutline,
  IoSearchOutline,
} from "react-icons/io5"
import { RiHome2Line } from "react-icons/ri"
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
            [styles.isActive]:
              router.asPath === "/apps" || router.asPath === "/",
          })}
        >
          <Link href="/apps">
            <a>
              <RiHome2Line fontSize={24} />
            </a>
          </Link>
        </li>
        <li
          className={cn(styles.footerListItem, {
            [styles.isActive]: router.asPath.includes("/categories"),
          })}
        >
          <Link href="/categories">
            <a>
              <IoGridOutline fontSize={24} />
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
      </ul>
    </footer>
  )
}
