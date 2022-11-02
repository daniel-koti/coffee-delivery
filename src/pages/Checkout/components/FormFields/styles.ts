import styled from 'styled-components'

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-family: 1.8rem;
  font-weight: 800;
  line-height: 2.34rem;

  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const AddressContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  padding: 4rem;

  border-radius: 0.6rem;
`

const BaseHeader = styled.header`
  display: flex;
  gap: 0.8rem;

  margin-bottom: 3.2rem;
`

export const HeaderAddress = styled(BaseHeader)`
  svg {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
`

export const HeaderAddressInfo = styled.div`
  p {
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
  span {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const HeaderPayment = styled(BaseHeader)`
  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20rem 27.6rem 6rem;
  column-gap: 1.2rem;
  row-gap: 1.6rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 20rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentContainer = styled.footer`
  background: ${(props) => props.theme.colors['base-card']};
  padding: 4rem;
  border-radius: 0.6rem;
`
