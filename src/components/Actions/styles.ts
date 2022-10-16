import styled from 'styled-components'

export const ActionsContainer = styled.div`
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
