import { StyledLink } from './styles'

export const HeaderLink = ({ url, children }: any) => {
  return <StyledLink to={url}>{children}</StyledLink>
}
