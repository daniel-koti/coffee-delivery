import { InputContainer, InputWrapper, InputItem, InfoRight } from './styles'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: any
  infoRight?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, infoRight, className, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        <InputWrapper hasError={!!error}>
          <InputItem ref={ref} {...props} />
          {infoRight && <InfoRight>{infoRight}</InfoRight>}
        </InputWrapper>
        {error && <p>{error}</p>}
      </InputContainer>
    )
  },
)
