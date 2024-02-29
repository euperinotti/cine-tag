import * as S from './styles'

export interface MediaPlayerProps {
  link: string
  title: string
}

export const MediaPlayer = ({ link, title }: MediaPlayerProps) => {
  return (
    <S.IFrame
      width="100%"
      height="100%"
      src={link}
      title={title}
      frameBorder="0"
    ></S.IFrame>
  )
}
