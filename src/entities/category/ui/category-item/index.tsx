import React, { FC } from "react"
import { IoChevronForwardOutline } from "react-icons/io5"

import styles from "./styles.module.scss"

interface CategoryItemProps {
  category: CategoryApp
}

export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  return (
    <li className={styles.category}>
      <span>
        {category.icon} {category.title}
      </span>
      <IoChevronForwardOutline />
    </li>
  )
}
