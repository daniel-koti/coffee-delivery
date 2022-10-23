import { InputHTMLAttributes, ReactNode } from 'react'
import { PaymentMethodContainer, ContentContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export function PaymentMethodInput({
  id,
  icon,
  label,
  ...props
}: PaymentMethodInputProps) {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" name="paymentMethod" {...props} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
}
