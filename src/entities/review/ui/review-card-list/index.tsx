import React from "react"

import { AddReview } from "../add-review"
import { ReviewCard } from "../review-card"

import styles from "./styles.module.scss"

const array = Array.from(Array(6))

export const ReviewCardList = () => {
  const isHasReviews = false

  if (!isHasReviews) {
    return <AddReview />
  }

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
