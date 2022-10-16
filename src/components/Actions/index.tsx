import { ActionsContainer } from './styles'

import { Minus, Plus } from 'phosphor-react'

export function Actions() {
  return (
    <ActionsContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>01</span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </ActionsContainer>
  )
}
