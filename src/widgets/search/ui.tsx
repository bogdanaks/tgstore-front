import React from "react"
import { IoSearchOutline } from "react-icons/io5"
import { Input } from "shared/ui/input"

import styles from "./styles.module.scss"

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        style={{ height: 35 }}
        placeholder="Search..."
        leftContent={<IoSearchOutline />}
      />
    </div>
  )
}
