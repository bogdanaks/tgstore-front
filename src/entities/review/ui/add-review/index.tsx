import React, { ChangeEvent, useState } from "react"
import { IoStar, IoStarOutline } from "react-icons/io5"
import cn from "classnames"
import { TgStore } from "entities/telegram/model"
import dynamic from "next/dynamic"
import { Button } from "shared/ui/button"
import { TextArea } from "shared/ui/textarea"

import styles from "./styles.module.scss"

const Modal = dynamic(() => import("shared/ui/modal"), {
  suspense: true,
})

export const AddReview = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [starRate, setStarRate] = useState(0)
  const [comment, setComment] = useState("")

  const handleAddReviewClick = () => {
    setIsShowModal(true)
  }

  const handleStarClick = (order: number) => {
    setStarRate(order)
  }

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const renderStar = (starRateLenght: number) => {
    if (starRate >= starRateLenght) {
      return (
        <IoStar
          fontSize={24}
          onClick={() => handleStarClick(starRateLenght)}
          className={cn({ [styles.isActive]: starRate >= starRateLenght })}
        />
      )
    }

    return (
      <IoStarOutline
        fontSize={24}
        onClick={() => handleStarClick(starRateLenght)}
        className={cn({ [styles.isActive]: starRate >= starRateLenght })}
      />
    )
  }

  console.log(TgStore.data?.user.first_name)

  return (
    <>
      <Button className={styles.btnAdd} onClick={handleAddReviewClick}>
        Add review
      </Button>
      <Modal
        isShowing={isShowModal}
        hide={() => setIsShowModal(false)}
        title="Add review"
      >
        <div className={styles.selectRate}>
          <span>Rate</span>
          <ul className={styles.selectRateStars}>
            {renderStar(1)}
            {renderStar(2)}
            {renderStar(3)}
            {renderStar(4)}
            {renderStar(5)}
          </ul>
        </div>
        <div className={styles.field}>
          <TextArea
            value={comment}
            onChange={handleCommentChange}
            label="Comment"
          />
        </div>
        <Button className={styles.sendBtn}>Send feedback</Button>
      </Modal>
    </>
  )
}
