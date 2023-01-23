import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import { Wrapper } from '../../components/Wrapper'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Actions } from '../../components/Actions'
import { formatMoney } from '../../utils/format'
import { FormFields } from './components/FormFields'
import {
  CheckoutPageContainer,
  CoffeesSelected,
  CoffeeInfo,
  ActionItemPayment,
  ButtonRemove,
  Title,
} from './styles'
import { Trash } from 'phosphor-react'
import { toast } from 'react-toastify'

const DELIVERY_PRICE = 3.5

const newDeliveryFormValidationSchema = zod.object({
  cep: zod
    .string({
      required_error: 'Informe o CEP',
    })
    .min(7, 'CEP tem no mínimo 7 caracteres'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod
    .number({
      invalid_type_error: 'Por favor insira um número válido',
    })
    .min(1, 'Número deve ser maior que 0')
    .nonnegative(),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod
    .string({
      required_error: 'Informe a UF',
    })
    .max(2, 'Não pode inserir mais de 2 caract')
    .min(2, 'Não pode inserir menos de 2 caract'),
  paymentMethods: zod.enum(['credit', 'debit', 'money']),
})

export type newDeliveryFormData = zod.infer<
  typeof newDeliveryFormValidationSchema
>

export function CheckoutPage() {
  const {
    cartItems,
    incrementCoffeeAmount,
    decrementCoffeeAmount,
    removeCoffeeInCart,
    resetCartItems,
  } = useContext(CoffeeContext)

  const navigate = useNavigate()

  const sumCoffeePrice = cartItems.reduce((accumulator, item) => {
    return (accumulator += item.price * item.amount)
  }, 0)

  const totalPrice = sumCoffeePrice ? sumCoffeePrice + DELIVERY_PRICE : 0

  const newDeliveryForm = useForm<newDeliveryFormData>({
    resolver: zodResolver(newDeliveryFormValidationSchema),
    defaultValues: {
      paymentMethods: 'money',
    },
  })

  const { handleSubmit } = newDeliveryForm

  function handleCompleteOrder(data: newDeliveryFormData) {
    toast.success('Pedido realizado com sucesso')
    navigate('/completeOrder', {
      state: data,
    })
    resetCartItems()
  }

  return (
    <Wrapper>
      <FormProvider {...newDeliveryForm}>
        <CheckoutPageContainer onSubmit={handleSubmit(handleCompleteOrder)}>
          <FormFields />
          <section>
            <Title>Cafés selecionados</Title>
            <CoffeesSelected>
              {cartItems.map((coffee) => {
                return (
                  <CoffeeInfo key={coffee.id}>
                    <img
                      src={`/src/assets/coffees_photos/${coffee.photo}`}
                      alt=""
                    />
                    <div>
                      <p>{coffee.name}</p>
                      <ActionItemPayment>
                        <Actions
                          quantity={coffee.amount}
                          handleIncrement={() =>
                            incrementCoffeeAmount(coffee.id, 'cart')
                          }
                          handleDecrement={() =>
                            decrementCoffeeAmount(coffee.id, 'cart')
                          }
                        />
                        <ButtonRemove
                          type="button"
                          onClick={() => removeCoffeeInCart(coffee.id)}
                        >
                          <Trash />
                          Remover
                        </ButtonRemove>
                      </ActionItemPayment>
                    </div>
                    <strong>{formatMoney(coffee.price * coffee.amount)}</strong>
                  </CoffeeInfo>
                )
              })}
              <footer>
                <div>
                  <span>Total de itens</span>
                  <span>Entrega</span>
                  <strong>Total</strong>
                </div>

                <div>
                  <span>{formatMoney(sumCoffeePrice)}</span>
                  <span>{formatMoney(DELIVERY_PRICE)}</span>
                  <strong>{formatMoney(totalPrice)}</strong>
                </div>
              </footer>

              <button type="submit" disabled={cartItems.length < 1}>
                Confirmar Pedido
              </button>
            </CoffeesSelected>
          </section>
        </CheckoutPageContainer>
      </FormProvider>
    </Wrapper>
  )
}
