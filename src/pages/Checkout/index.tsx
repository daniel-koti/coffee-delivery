import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

const DELIVERY_PRICE = 3.5

const newDeliveryFormValidationSchema = zod.object({
  cpf: zod.string().min(7, 'Informe o CPF'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o numero').nonnegative(),
  complement: zod.string().min(1, 'Informe o complemento'),
  district: zod.string().min(1, 'Informe o distrito'),
  city: zod.string().min(1, 'Informe a cidade'),
  paymentMethods: zod.string(),
})

type newDeliveryFormData = zod.infer<typeof newDeliveryFormValidationSchema>

export function CheckoutPage() {
  const {
    cartItems,
    incrementCoffeeAmount,
    decrementCoffeeAmount,
    removeCoffeeInCart,
  } = useContext(CoffeeContext)

  const sumCoffeePrice = cartItems.reduce((accumulator, item) => {
    return (accumulator += item.price * item.amount)
  }, 0)

  const totalPrice = sumCoffeePrice ? sumCoffeePrice + DELIVERY_PRICE : 0

  const newDeliveryForm = useForm<newDeliveryFormData>()

  const { handleSubmit } = newDeliveryForm

  function handleCompleteOrder(data: newDeliveryFormData) {
    console.log(data)
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
                    <img src={`public/${coffee.photo}`} alt="" />
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
