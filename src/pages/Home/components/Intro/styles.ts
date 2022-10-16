import styled from 'styled-components'
import introBackground from '../../../../assets/intro-background.png'
import { rgba } from 'polished'

export const IntroContainer = styled.section`
  width: 100%;
  height: 54.4rem;
  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10.4rem;
`

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 5.6rem;

  section {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 4.8rem;
      font-weight: 800;
      line-height: 130%;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: 2rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
      line-height: 2.6rem;
    }
  }
`

export const BenefitsContainer = styled.div`
  margin-top: 6.6rem;
  width: 100%;
  row-gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
