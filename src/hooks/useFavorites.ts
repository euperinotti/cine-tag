import { FavoritesContext } from '@/context/FavoritesContext'
import { Favorite } from '@/models/Favorites'
import { useContext } from 'react'

export const useFavorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  function addToFavorites(newFavorite: Favorite) {
    const isRepeated = favorites.some((e: Favorite) => e.id === newFavorite.id)

    const newFavoriteList = [...favorites]

    if (!isRepeated) {
      newFavoriteList.push(newFavorite)
      return setFavorites(newFavoriteList)
    }

    newFavoriteList.splice(newFavoriteList.indexOf(newFavorite), 1)
    return setFavorites(newFavoriteList)
  }

  return { favorites, setFavorites, addToFavorites }
}
