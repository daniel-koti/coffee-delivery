import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

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

interface NewCoffeeRequest {
  cpf: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  paymentMethods: 'debit' | 'credit' | 'money'
}

const DELIVERY_PRICE = 3.5

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

  const form = useForm<NewCoffeeRequest>()

  function handleCompleteOrder(data: NewCoffeeRequest) {
    console.log(data)
  }

  return (
    <Wrapper>
      <FormProvider {...form}>
        <CheckoutPageContainer
          onSubmit={form.handleSubmit(handleCompleteOrder)}
        >
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
