import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10.4rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors['base-background']};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.8rem;

    background-color: ${(props) => props.theme.colors['brand-purple-light']};
    color: ${(props) => props.theme.colors['brand-purple-dark']};
    font-size: 1.4rem;
    line-height: 1.82rem;
    border-radius: 0.6rem;
  }

  .cart-container {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors['brand-yellow-light']};
    padding: 0.8rem;
    border: none;
    position: relative;

    border-radius: 0.6rem;
    color: ${(props) => props.theme.colors['brand-yellow-dark']};

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      font-weight: 700;
      font-size: 1.2rem;
      border-radius: 50%;
      color: ${(props) => props.theme.colors['base-white']};
      background-color: ${(props) => props.theme.colors['brand-yellow-dark']};

      padding: 0 0.2rem;

      position: absolute;
      top: -8px;
      right: -8px;
    }
  }
`
