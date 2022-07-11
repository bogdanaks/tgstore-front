import React from "react"
import cn from "classnames"

import styles from "./styles.module.scss"

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  fixLabel?: boolean
  leftContent?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({
  label,
  leftContent,
  fixLabel,
  ...props
}) => {
  return (
    <div className={styles.input}>
      {leftContent && (
        <div className={styles.inputLeftContent}>{leftContent}</div>
      )}
      <input className={styles.inputField} {...props} required />
      {label && (
        <label
          className={cn(styles.inputLabel, { [styles.fixLabel]: fixLabel })}
        >
          {label}
        </label>
      )}
    </div>
  )
}
