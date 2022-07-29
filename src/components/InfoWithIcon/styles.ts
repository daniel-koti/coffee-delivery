import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  p {
    color: ${(props) => props.theme.colors['base-text']};
  }
`

interface IconContainerProps {
  iconBg: string
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ iconBg }) => iconBg};
  color: ${(props) => props.theme.colors['base-white']};
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
`
