import styled from 'styled-components'

export const CoffeesContainer = styled.section`
  h2 {
    padding-top: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-family: 3.2rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors['base-subtitle']};

    margin-bottom: 1.4rem;
  }
`

export const CoffeesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 1rem;
`
