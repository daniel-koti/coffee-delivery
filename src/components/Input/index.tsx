import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form'
import {
  InputContainer,
  InputWrapper,
  InputItem,
  InfoRight,
  ErrorInfo,
} from './styles'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
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

        {!!error && <ErrorInfo>{error.toString()}</ErrorInfo>}
      </InputContainer>
    )
  },
)
