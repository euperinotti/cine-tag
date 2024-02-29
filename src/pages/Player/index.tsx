import { Banner } from '@/components/Banner'
import * as S from './styles'
import { Title } from '@/components/Title'
import { useParams } from 'react-router-dom'
import videos from '@/json/db.json'
import { Video } from '@/models/Video'
import PageNotFound from '../404'
import { MediaPlayer } from '@/components/MediaPlayer'

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
        <MediaPlayer link={video.link} title={video.titulo} />
      </S.Container>
    </>
  )
}
