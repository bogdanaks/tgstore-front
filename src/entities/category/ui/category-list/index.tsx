import React, { FC } from "react"
import Link from "next/link"

import { CategoryItem } from "../category-item"

import styles from "./styles.module.scss"

interface CategoryListProps {
  list: CategoryApp[]
}

export const CategoryList: FC<CategoryListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((category, index) => (
        <Link key={index} href={`/categories/${category.id}`}>
          <a className={styles.categoriesItem}>
            <CategoryItem category={category} />
          </a>
        </Link>
      ))}
    </ul>
  )
}
