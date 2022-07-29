import styled from 'styled-components'

export const HomePageContainer = styled.div`
  margin-bottom: 15.7rem;
`

export const CoffeeList = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-family: 3.2rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors['base-subtitle']};

    margin-bottom: 1.4rem;
  }

  .coffee-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    gap: 1rem;
  }
`
