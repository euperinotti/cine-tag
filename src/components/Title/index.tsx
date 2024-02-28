import { ReactNode } from 'react'
import * as S from './styles'

export interface TitleProps {
  children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <S.Container>{children}</S.Container>
}
