import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme['gray-800']};
  }

  body, input, button {
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme['gray-200']}
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
