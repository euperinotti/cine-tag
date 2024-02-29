import { Banner } from '@/components/Banner'
import { Card } from '@/components/Card'
import { Title } from '@/components/Title'
import videos from '@/json/db.json'
import * as S from './styles'
import { BaseContainer } from '@/components/BaseContainer'

export default function Home() {
  return (
    <>
      <Banner image="home" />
      <BaseContainer>
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>

        <S.Section>
          {videos.map((video) => (
            <Card
              key={video.id}
              id={video.id}
              title={video.titulo}
              image={video.capa}
            />
          ))}
        </S.Section>
      </BaseContainer>
    </>
  )
}
