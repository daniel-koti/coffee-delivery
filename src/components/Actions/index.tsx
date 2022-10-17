import { ActionsContainer } from './styles'

import { Minus, Plus } from 'phosphor-react'

interface ActionsProps {
  quantity: number
  handleIncrement: () => void
  handleDecrement: () => void
}

export function Actions({
  handleDecrement,
  handleIncrement,
  quantity,
}: ActionsProps) {
  return (
    <ActionsContainer>
      <button onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </button>
    </ActionsContainer>
  )
}
