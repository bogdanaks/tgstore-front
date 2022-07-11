import React from "react"
import cn from "classnames"

import styles from "./styles.module.scss"

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string
  fixLabel?: boolean
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  fixLabel,
  ...props
}) => {
  return (
    <div className={styles.textarea}>
      <textarea className={styles.textareaField} required {...props} />
      {label && (
        <label
          className={cn(styles.textareaLabel, { [styles.fixLabel]: fixLabel })}
        >
          {label}
        </label>
      )}
    </div>
  )
}
