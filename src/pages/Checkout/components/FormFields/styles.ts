import styled from 'styled-components'

interface InputProps {
  size: number
  spacing?: number
}

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

export const InputGridContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`

export const Grid = styled.div`
  width: 100%;
`

export const InputContainer = styled.input<InputProps>`
  background: ${(props) => props.theme.colors['base-button']};
  border: 1px solid #e6e5e5;
  padding: 1.2rem;

  font-size: 1.4rem;
  border-radius: 0.4rem;
  color: ${(props) => props.theme.colors['base-text']};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }

  width: ${(props) => props.size}%;
  margin-left: ${(props) => props.spacing}%;
`

export const PaymentMethodContainer = styled.footer`
  background: ${(props) => props.theme.colors['base-card']};
  padding: 4rem;
  border-radius: 0.6rem;
`
