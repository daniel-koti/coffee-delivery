import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors['base-card']};
  width: 25.6rem;

  padding: 2rem;

  margin-top: 4rem;
  border-radius: 0.6rem 3.6rem 0.6rem 3.6rem;
  text-align: center;

  h4 {
    margin-top: 1.6rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    margin-top: 0.8rem;
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const HeaderCoffee = styled.header`
  img {
    width: 120px;
    margin-top: -50px;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.2rem;

    gap: 0.4rem;

    span {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.3rem;
      text-transform: uppercase;
      background: ${(props) => props.theme.colors['brand-yellow-light']};
      color: ${(props) => props.theme.colors['brand-yellow-dark']};
      padding: 0.4rem 0.8rem;
      border-radius: 10rem;
    }
  }
`

export const FooterCoffee = styled.footer`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors['base-text']};

  span.price {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
    margin-left: 0.1rem;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.2rem;
  height: 3.8rem;
  background: ${(props) => props.theme.colors['base-button']};
  margin-left: 2.3rem;

  border-radius: 0.6rem;

  button {
    flex: 1;
    height: 100%;
    border: none;
    cursor: pointer;
    background: ${(props) => props.theme.colors['base-button']};
    color: ${(props) => props.theme.colors['brand-purple']};
    border-radius: 0.6rem;

    padding: 0 1rem;

    &:hover {
      color: ${(props) => props.theme.colors['brand-purple-dark']};
    }
  }

  span {
    font-weight: 400;
    color: ${(props) => props.theme.colors['base-title']};
    background: ${(props) => props.theme.colors['base-button']};
    flex: 1;
  }
`

export const Cart = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors['brand-purple-dark']};
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 0.6rem;
  border: none;

  margin-left: 0.8rem;
  color: ${(props) => props.theme.colors['base-white']};

  &:hover {
    background: ${(props) => props.theme.colors['brand-purple']};
  }
`
