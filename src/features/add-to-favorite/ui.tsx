import React, { FC, useEffect, useState } from "react"
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useMutation, useQuery } from "@tanstack/react-query"
import { TgStore } from "entities/telegram/model"
import { addToFavorite, delFavorite } from "shared/api"
import { fetcherWithUserId } from "shared/lib/fetcher"
import { Button } from "shared/ui/button"

import styles from "./styles.module.scss"

interface FavoriteProps {
  app_id: string
}

export const Favorite: FC<FavoriteProps> = ({ app_id }) => {
  const {
    isLoading,
    isSuccess,
    data: favorite,
  } = useQuery(
    ["favorites", app_id],
    fetcherWithUserId<{ data: FavoriteWebApp | boolean }>(
      `/favorite/${app_id}`,
      TgStore.data?.user.id
    ),
    {
      enabled: !!TgStore.data?.user.id,
    }
  )

  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = async () => {
    if (!isFavorite) {
      await addToFavorite(app_id, TgStore.data?.user.id)
    } else {
      await delFavorite(app_id, TgStore.data?.user.id)
    }

    setIsFavorite((prevState) => !prevState)
  }

  useEffect(() => {
    if (favorite?.data) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [favorite])

  return (
    <Button onClick={handleFavoriteClick} type="text">
      {!isFavorite && (
        <i className={styles.heartOutline}>
          <IoHeartOutline fontSize={24} />
        </i>
      )}
      {isFavorite && (
        <i className={styles.heartContained}>
          <IoHeart fontSize={24} />
        </i>
      )}
    </Button>
  )
}
