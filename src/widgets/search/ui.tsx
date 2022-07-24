import React, { ChangeEvent, FC, HTMLAttributes, MutableRefObject } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { Input } from "shared/ui/input"

import styles from "./styles.module.scss"

interface SearchProps extends HTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  autoFocus?: boolean
}

export const Search: FC<SearchProps> = ({
  value,
  onChange,
  autoFocus,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <Input
        style={{ height: 35 }}
        placeholder="Search..."
        leftContent={<IoSearchOutline />}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        {...props}
      />
    </div>
  )
}
