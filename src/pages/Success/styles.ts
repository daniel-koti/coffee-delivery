import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  header {
    margin-top: 8rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3.2rem;
      color: ${(props) => props.theme.colors['brand-yellow-dark']};
    }

    p {
      font-size: 2rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }

  > div {
    margin-top: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const OrderDetailsContent = styled.ul`
  padding: 4rem 10.2rem 4rem 4rem;
  position: relative;
  border-radius: 0.6rem 3.6rem 0.6rem 3.6rem;
  background: ${(props) => props.theme.colors['base-background']};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  li {
    display: flex;
    align-items: center;

    gap: 1.2rem;

    & + li {
      margin-top: 3.2rem;
    }

    > div {
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`
