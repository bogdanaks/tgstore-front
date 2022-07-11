import React, { FC } from "react"

import styles from "./styles.module.scss"

export const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
