import styled from 'styled-components'

interface IconProps {
  iconBackground: string
}

export const IconCircleContainer = styled.span<IconProps>`
  background-color: ${(props) => props.iconBackground};
  display: flex;
  border-radius: 50%;
  padding: 0.8rem;

  svg {
    color: #fff;
  }
`
