import { Banner } from '@/components/Banner'
import * as S from './styles'
import { Title } from '@/components/Title'
import { Card } from '@/components/Card'

export default function Favorites() {
  return (
    <S.Container>
      <Banner image="favoritos" />
      <Title>Meus Favoritos</Title>
      <S.Section>
        <Card id={1} title="Test" image="" />
      </S.Section>
    </S.Container>
  )
}
