import styled from 'styled-components'

export const HeaderInputFormContainer = styled.header`
  display: flex;
  gap: 0.8rem;

  margin-bottom: 3.2rem;

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
