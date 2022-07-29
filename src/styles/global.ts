import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.colors['base-background']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }

  ul, li, a {
    text-decoration: none;
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 0.2rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3.2rem;
    background: ${({ theme }) => theme.colors['brand-purple']}
  }
`
