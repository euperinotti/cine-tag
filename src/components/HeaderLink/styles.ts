import theme from '@/styles/theme'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 400;
  padding: 1em;
  text-decoration: none;
`
