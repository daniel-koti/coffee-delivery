import { InputHTMLAttributes, ReactNode } from 'react'
import { useForm } from 'react-hook-form'
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
  const { register } = useForm()

  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} {...register('paymentMethod')} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
}
