import React, { FC, HTMLAttributes } from "react"
import cn from "classnames"

import styles from "./styles.module.scss"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type?: "default" | "primary" | "text" | "link"
}

export const Button: FC<ButtonProps> = ({
  children,
  type = "primary",
  ...props
}) => {
  return (
    <button {...props} className={cn(styles.button, styles[type])}>
      {children}
    </button>
  )
}
