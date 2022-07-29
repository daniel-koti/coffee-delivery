import { ReactNode } from 'react'
import { IconCircleContainer } from './styles'

interface IconCircleProps {
  iconSVG: ReactNode
  iconBg: string
}

export function IconCircle(props: IconCircleProps) {
  return (
    <IconCircleContainer iconBackground={props.iconBg}>
      {props.iconSVG}
    </IconCircleContainer>
  )
}
