import * as S from './styles'
import iconAddFavorite from '/imagens/favorite_outline.png'

export interface CardProps {
  id: string
  title: string
  image: string
}

export const Card = ({ title, image }: CardProps) => {
  return (
    <S.Container>
      <S.Image src={image} alt={title}></S.Image>
      <S.Title>{title}</S.Title>
      <S.Icon src={iconAddFavorite} alt="Add to Favorites"></S.Icon>
    </S.Container>
  )
}
