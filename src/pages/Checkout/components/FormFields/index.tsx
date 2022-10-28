import { CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FieldValues, useFormContext, UseFormRegister } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { HeaderInputForm } from '../HeaderInputForm'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptions } from '../PaymentMethodOptions'
import {
  AddressContainer,
  Grid,
  InputContainer,
  InputGridContainer,
  PaymentContainer,
  Title,
} from './styles'

export function FormFields() {
  const { colors } = useTheme()
  const { register } = useFormContext()

  return (
    <section>
      <Title>Complete seu pedido</Title>
      <AddressContainer>
        <HeaderInputForm
          title="Endereço de entrega"
          description="Informe o endereço onde deseja receber o seu pedido"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />

        <InputGridContainer>
          <Grid>
            <InputContainer
              type="text"
              placeholder="CEP"
              size={29}
              {...register('cep')}
            />
          </Grid>
          <Grid>
            <InputContainer
              type="text"
              placeholder="Rua"
              size={100}
              {...register('street')}
            />
          </Grid>
          <Grid>
            <InputContainer
              type="number"
              placeholder="Número"
              size={29}
              {...register('number')}
            />
            <InputContainer
              type="text"
              placeholder="Complemento"
              size={69}
              spacing={2}
              {...register('complement')}
            />
          </Grid>
          <Grid>
            <InputContainer
              type="text"
              placeholder="Bairro"
              size={29}
              {...register('district')}
            />
            <InputContainer
              type="text"
              placeholder="Cidade"
              size={57}
              spacing={2}
              {...register('city')}
            />
            <InputContainer
              type="text"
              placeholder="UF"
              size={10}
              spacing={2}
              {...register('uf')}
            />
          </Grid>
        </InputGridContainer>
      </AddressContainer>
      <PaymentContainer>
        <HeaderInputForm
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />
        <PaymentMethodOptions />
      </PaymentContainer>
    </section>
  )
}
