import { CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { HeaderInputForm } from '../../../../components/HeaderInputForm'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptions } from '../PaymentMethodOptions'
import {
  AddressContainer,
  Grid,
  InputContainer,
  InputGridContainer,
  PaymentMethodContainer,
  Title,
} from './styles'

interface FormFieldsProps {
  register: any
}

export function FormFields({ register }: FormFieldsProps) {
  const { colors } = useTheme()

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
              {...register('street_number')}
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
      <PaymentMethodContainer>
        <HeaderInputForm
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />
        <PaymentMethodOptions />
      </PaymentMethodContainer>
    </section>
  )
}
