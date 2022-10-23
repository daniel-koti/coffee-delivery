import { PaymentMethodOptionsContainer } from './styles'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { Bank, CreditCard, Money } from 'phosphor-react'

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput key={label} icon={icon} label={label} id={key} />
      ))}
    </PaymentMethodOptionsContainer>
  )
}
