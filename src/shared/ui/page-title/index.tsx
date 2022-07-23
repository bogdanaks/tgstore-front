import React, { FC } from "react"

interface PageTitleProps {
  title: string
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return <h1 style={{ marginBottom: "20px" }}>{title}</h1>
}
