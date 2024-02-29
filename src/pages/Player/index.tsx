import { Banner } from '@/components/Banner'
import * as S from './styles'
import { Title } from '@/components/Title'
import { useParams } from 'react-router-dom'
import videos from '@/json/db.json'
import { Video } from '@/models/Video'
import PageNotFound from '../404'

export default function Player() {
  const params = useParams()
  const video: Video = videos.find((e) => e.id === Number(params.id)) as Video

  if (!video) return <PageNotFound />

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <S.Container>
        <S.IFrame
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
        ></S.IFrame>
      </S.Container>
    </>
  )
}
