import React from "react"

import { ReviewCard } from "../review-card"

import styles from "./styles.module.scss"

const array = Array.from(Array(6))

export const ReviewCardList = () => {
  return (
    <ul className={styles.list}>
      {array.map((item, index) => (
        <ReviewCard
          key={index}
          name="Bogdan A"
          date={new Date()}
          rating={4}
          reviewText="Топ, мне всё понравилось!"
        />
      ))}
    </ul>
  )
}
