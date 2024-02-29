import { Banner } from '@/components/Banner'
import * as S from './styles'
import { Title } from '@/components/Title'
import { Card } from '@/components/Card'
import { useFavorites } from '@/hooks/useFavorites'
import { Favorite } from '@/models/Favorites'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <S.Container>
      <Banner image="favoritos" />
      <Title>Meus Favoritos</Title>
      <S.Section>
        {favorites.map((favorite: Favorite) => (
          <Card
            key={favorite.id}
            id={favorite.id}
            title={favorite.title}
            image={favorite.image}
          />
        ))}
        <Card id={1} title="Test" image="" />
      </S.Section>
    </S.Container>
  )
}
