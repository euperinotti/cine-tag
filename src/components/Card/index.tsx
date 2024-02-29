import { useFavorites } from '@/hooks/useFavorites'
import * as S from './styles'
import iconAddFavorite from '/imagens/favorite_outline.png'
import iconFavorite from '/imagens/favorite.png'
import { Favorite } from '@/models/Favorites'
import { Link } from 'react-router-dom'

export interface CardProps {
  id: number
  title: string
  image: string
}

export const Card = ({ id, title, image }: CardProps) => {
  const { favorites, addToFavorites } = useFavorites()
  const isFavorite = favorites.some((e: Favorite) => e.id === id)
  const icon = !isFavorite ? iconAddFavorite : iconFavorite

  return (
    <S.Container>
      <Link to={`/${id}`}>
        <S.Image src={image} alt={title}></S.Image>
        <S.Title>{title}</S.Title>
      </Link>
      <S.Icon
        src={icon}
        alt="Add to Favorites"
        onClick={() => addToFavorites({ id, title, image })}
      ></S.Icon>
    </S.Container>
  )
}
