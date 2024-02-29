import theme from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 0 1em 0;
  margin-top: 0.5em;
  width: 280px;
  background-color: ${theme.colors.darkGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-decoration: none;
  color: ${theme.colors.black};
  text-align: left;
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.h2`
  padding: 0 1em;
`

export const Icon = styled.img`
  width: 25px;
`
