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

  h1, h2 , h3, h4, h5, h6, strong {
    font-family: 'Baloo 2', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3.2rem;
    background: ${({ theme }) => theme.colors['brand-yellow-dark']}
  }
`
