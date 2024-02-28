import * as S from './styles'

export interface BannerProps {
  image: string
}

export const Banner = ({ image }: BannerProps) => {
  return (
    <S.Container
      style={{ backgroundImage: `url('/imagens/banner-${image}.png')` }}
    ></S.Container>
  )
}
