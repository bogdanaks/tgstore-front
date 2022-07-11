import React, { FC } from "react"
import { IoStar, IoStarOutline } from "react-icons/io5"

import styles from "./styles.module.scss"

interface RatingProps {
  appId: string
}

export const Rating: FC<RatingProps> = ({ appId }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.ratingHeader}>
        <span className={styles.ratingHeaderTitle}>Reviews: 188</span>
        <button style={{ fontSize: "15px" }}>See All</button>
      </div>
      <div className={styles.ratingBody}>
        <div className={styles.ratingBodyMain}>
          <div className={styles.ratingBodyMainAmount}>4.8</div>
          <ul className={styles.ratingBodyMainStars}>
            <li className={styles.ratingBodyMainStarsItem}>
              <div className={styles.ratingBodyMainStarsItemList}>
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
              </div>
              <div className={styles.ratingBodyMainStarsItemLine}>
                <div className={styles.ratingBodyMainStarsItemLineInner} />
              </div>
            </li>
            <li className={styles.ratingBodyMainStarsItem}>
              <div className={styles.ratingBodyMainStarsItemList}>
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
              </div>
              <div className={styles.ratingBodyMainStarsItemLine}>
                <div className={styles.ratingBodyMainStarsItemLineInner} />
              </div>
            </li>
            <li className={styles.ratingBodyMainStarsItem}>
              <div className={styles.ratingBodyMainStarsItemList}>
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
              </div>
              <div className={styles.ratingBodyMainStarsItemLine}>
                <div className={styles.ratingBodyMainStarsItemLineInner} />
              </div>
            </li>
            <li className={styles.ratingBodyMainStarsItem}>
              <div className={styles.ratingBodyMainStarsItemList}>
                <IoStar fontSize={14} />
                <IoStar fontSize={14} />
              </div>
              <div className={styles.ratingBodyMainStarsItemLine}>
                <div className={styles.ratingBodyMainStarsItemLineInner} />
              </div>
            </li>
            <li className={styles.ratingBodyMainStarsItem}>
              <div className={styles.ratingBodyMainStarsItemList}>
                <IoStar fontSize={14} />
              </div>
              <div className={styles.ratingBodyMainStarsItemLine}>
                <div className={styles.ratingBodyMainStarsItemLineInner} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
