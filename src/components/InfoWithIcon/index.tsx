import { ShoppingCart } from 'phosphor-react'
import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  iconBg: string
  icon?: ReactNode
  text?: string
}

export function InfoWithIcon({ icon, iconBg, text }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>
        <ShoppingCart weight="fill" />
      </IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
