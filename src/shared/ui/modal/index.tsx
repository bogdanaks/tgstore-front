import React, { FC } from "react"
import ReactDOM from "react-dom"
import { IoCloseCircleOutline } from "react-icons/io5"
import cn from "classnames"

import styles from "./styles.module.scss"

interface ModalProps {
  isShowing: boolean
  hide: () => void
  children: React.ReactNode
  title?: string
}

const Modal: FC<ModalProps> = ({ children, isShowing, hide, title }) => {
  if (!isShowing) return null

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalWrapper} />
      <div className={styles.modalContainer}>
        <div
          className={cn(styles.modalContainerHeader, {
            [styles.noTitle]: !title,
          })}
        >
          {title && <h3>{title}</h3>}
          <i className={styles.closeIcon} onClick={hide}>
            <IoCloseCircleOutline fontSize={30} />
          </i>
        </div>
        <div className={styles.modalContainerBody}>{children}</div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
