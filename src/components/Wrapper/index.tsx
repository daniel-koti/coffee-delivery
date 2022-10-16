import { ReactNode } from 'react'
import { WrapperContainer } from './styles'

interface WrapperProps {
  children: ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return <WrapperContainer>{children}</WrapperContainer>
}
