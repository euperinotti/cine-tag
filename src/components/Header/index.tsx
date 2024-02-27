import { Link } from 'react-router-dom'
import CineTagLogo from '/imagens/logo.png'
import * as S from './styles'
import { HeaderLink } from '@/components/HeaderLink'

export const Header = () => {
  return (
    <S.Container>
      <Link to={'/'}>
        <img src={CineTagLogo} alt="" />
      </Link>
      <nav>
        <HeaderLink url={'/'}>Home</HeaderLink>
        <HeaderLink url={'/favorites'}>Favorites</HeaderLink>
      </nav>
    </S.Container>
  )
}
