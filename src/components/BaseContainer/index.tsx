import { ReactNode } from 'react'
import * as S from './styles'

export interface BaseContainerProps {
  children: ReactNode
}

export const BaseContainer = ({ children }: BaseContainerProps) => {
  return <S.Container>{children}</S.Container>
}
