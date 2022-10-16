import styled from 'styled-components'

export const CheckoutPageContainer = styled.form`
  padding-top: 4rem;
  margin-top: 10.4rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  gap: 3.2rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-family: 1.8rem;
    font-weight: 800;
    line-height: 2.34rem;

    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  button[type='submit'] {
    cursor: pointer;
    width: 100%;
    margin-top: 2.4rem;
    padding: 1.2rem;
    background: ${(props) => props.theme.colors['brand-yellow']};
    border: none;

    border-radius: 0.6rem;
    color: ${(props) => props.theme.colors['base-white']};
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;

    line-height: 160%;
    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme.colors['brand-yellow-dark']};
    }
  }
`

const BaseHeader = styled.header`
  display: flex;
  gap: 0.8rem;

  margin-bottom: 3.2rem;

  > div {
    p {
      line-height: 130%;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    span {
      font-size: 1.4rem;
      line-height: 130%;
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`

export const HeaderAddress = styled(BaseHeader)`
  svg {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
`

export const HeaderPayment = styled(BaseHeader)`
  svg {
    color: ${(props) => props.theme.colors['brand-purple-dark']};
  }
`

export const AddressContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  padding: 4rem;

  border-radius: 0.6rem;
`

export const InputGridContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  input {
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
  }

  .grid-1.sm {
    width: 100%;

    input {
      width: 30%;
    }
  }

  .grid-1.full {
    width: 100%;

    input {
      width: 100%;
    }
  }

  .grid-2 {
    width: 100%;

    input:nth-child(1) {
      width: 29%;
      margin-right: 2%;
    }

    input:nth-child(2) {
      width: 69%;
    }
  }

  .grid-3 {
    width: 100%;

    input:nth-child(1) {
      width: 29%;
      margin-right: 2%;
    }

    input:nth-child(2) {
      width: 57%;
      margin-right: 2%;
    }

    input:nth-child(3) {
      width: 10%;
    }
  }
`

export const PaymentMethodContainer = styled.footer`
  background: ${(props) => props.theme.colors['base-card']};
  padding: 4rem;
  border-radius: 0.6rem;

  > div {
    display: flex;
    gap: 1.2rem;
  }
`

export const CoffeesSelected = styled.div`
  margin-top: 1.5rem;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 4rem;

  border-radius: 0.6rem 4.4rem 0.6rem 4.4rem;

  footer {
    display: flex;
    justify-content: space-between;

    margin-top: 2.4rem;

    div {
      display: flex;
      flex-direction: column;

      gap: 1.2rem;

      span {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors['base-text']};
      }

      strong {
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme.colors['base-subtitle']};
      }
    }

    div:nth-child(1) {
      text-align: left;
    }

    div:nth-child(2) {
      text-align: right;
    }
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding: 2.4rem 0;

  > img {
    width: 6.4rem;
    margin-right: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    gap: 0.8rem;
  }

  strong {
    flex: 1;
    margin-left: 4rem;
    line-height: 130%;

    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const ActionItemPayment = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const ButtonRemove = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border: none;
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 0.6rem;
  font-size: 1.2rem;
  padding: 0.6rem 0.8rem;

  color: ${(props) => props.theme.colors['base-text']};
  text-transform: uppercase;
  line-height: 160%;

  svg {
    color: ${(props) => props.theme.colors['brand-purple-dark']};
    font-size: 1.6rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 7.2rem;
  height: 3.8rem;
  background: ${(props) => props.theme.colors['base-button']};

  border-radius: 0.6rem;

  button {
    flex: 1;
    height: 100%;
    border: none;
    cursor: pointer;
    background: ${(props) => props.theme.colors['base-button']};
    color: ${(props) => props.theme.colors['brand-purple']};
    border-radius: 0.6rem;

    font-size: 2rem;

    padding: 0 1rem;

    &:hover {
      color: ${(props) => props.theme.colors['brand-purple-dark']};
    }
  }

  span {
    flex: 1;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-title']};
    background: ${(props) => props.theme.colors['base-button']};
  }
`
