import React, { FC } from "react"
import { IoStar, IoStarOutline } from "react-icons/io5"

import styles from "./styles.module.scss"

interface ReviewCardProps {
  name: string
  date: Date
  reviewText: string
  rating: number
}

export const ReviewCard: FC<ReviewCardProps> = ({
  name,
  date,
  rating,
  reviewText,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.itemTop}>
        <div className={styles.itemTopStars}>
          <IoStar fontSize={14} />
          <IoStar fontSize={14} />
          <IoStar fontSize={14} />
          <IoStar fontSize={14} />
          <IoStarOutline fontSize={14} />
        </div>
        <div className={styles.itemTopUser}>
          <span>{name}</span>
          <span>{date.toLocaleDateString()}</span>
        </div>
      </div>
      <div className={styles.itemText}>{reviewText}</div>
    </li>
  )
}
