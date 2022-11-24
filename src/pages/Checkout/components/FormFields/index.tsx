import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { Input } from '../../../../components/Input'
import { HeaderInputForm } from '../HeaderInputForm'
import { PaymentMethodOptions } from '../PaymentMethodOptions'
import { AddressContainer, Grid, PaymentContainer, Title } from './styles'

export function FormFields() {
  const { colors } = useTheme()

  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <section>
      <Title>Complete seu pedido</Title>
      <AddressContainer>
        <HeaderInputForm
          title="Endereço de entrega"
          description="Informe o endereço onde deseja receber o seu pedido"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />

        <Grid>
          <Input
            type="text"
            placeholder="CEP"
            {...register('cep')}
            error={errors.cep?.message}
            className="cep"
          />
          <Input
            type="text"
            placeholder="Rua"
            {...register('street')}
            error={errors.street?.message}
            className="street"
          />
          <Input
            type="number"
            placeholder="Número"
            {...register('number', {
              valueAsNumber: true,
            })}
            error={errors.number?.message}
          />

          <Input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            className="complement"
            infoRight="Opcional"
          />

          <Input
            type="text"
            placeholder="Bairro"
            {...register('district')}
            error={errors.district?.message}
          />
          <Input
            type="text"
            placeholder="Cidade"
            {...register('city')}
            error={errors.city?.message}
          />
          <Input
            type="text"
            placeholder="UF"
            {...register('uf')}
            error={errors.uf?.message}
          />
        </Grid>
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
