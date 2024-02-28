import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.font.family.main};
      font-size: ${theme.font.sizes.small};
      background-color: ${theme.colors.white};
      overflow-x: hidden;
      color: ${theme.colors.black};
    }

    p {
      line-height: 25px;
    }
`

export default GlobalStyles
