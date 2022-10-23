import { MapPinLine, CurrencyDollar, Trash, CreditCard } from 'phosphor-react'
import { PaymentMethodInput } from './components/PaymentMethodInput'
import { useContext } from 'react'

import {
  AddressContainer,
  CheckoutPageContainer,
  CoffeesSelected,
  HeaderAddress,
  HeaderPayment,
  CoffeeInfo,
  ActionItemPayment,
  InputGridContainer,
  PaymentMethodContainer,
  ButtonRemove,
  Title,
  InputContainer,
  Grid,
} from './styles'
import { Wrapper } from '../../components/Wrapper'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Actions } from '../../components/Actions'
import { formatMoney } from '../../utils/format'

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

  const delivery = 3.5

  const totalPrice = sumCoffeePrice ? sumCoffeePrice + delivery : 0

  return (
    <Wrapper>
      <CheckoutPageContainer>
        <section>
          <Title>Complete seu pedido</Title>
          <AddressContainer>
            <HeaderAddress>
              <MapPinLine size={22} />
              <div>
                <p>Endereço de entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </HeaderAddress>

            <InputGridContainer>
              <Grid>
                <InputContainer type="text" placeholder="CEP" size={29} />
              </Grid>
              <Grid>
                <InputContainer type="text" placeholder="Rua" size={100} />
              </Grid>
              <Grid>
                <InputContainer type="number" placeholder="Número" size={29} />
                <InputContainer
                  type="text"
                  placeholder="Complemento"
                  size={69}
                  spacing={2}
                />
              </Grid>
              <Grid>
                <InputContainer type="text" placeholder="Bairro" size={29} />
                <InputContainer
                  type="text"
                  placeholder="Cidade"
                  size={57}
                  spacing={2}
                />
                <InputContainer
                  type="text"
                  placeholder="UF"
                  size={10}
                  spacing={2}
                />
              </Grid>
            </InputGridContainer>
          </AddressContainer>
          <PaymentMethodContainer>
            <HeaderPayment>
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </HeaderPayment>
            <div>
              <PaymentMethodInput
                id="credit_cart"
                label="Cartão de Crédito"
                icon={<CreditCard size={16} />}
              />
              <PaymentMethodInput
                id="debit_cart"
                label="Cartão de Débito"
                icon={<CreditCard size={16} />}
              />
              <PaymentMethodInput
                id="money"
                label="Dinheiro"
                icon={<CreditCard size={16} />}
              />
            </div>
          </PaymentMethodContainer>
        </section>
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
                <span>{formatMoney(delivery)}</span>
                <strong>{formatMoney(totalPrice)}</strong>
              </div>
            </footer>

            <button type="submit">Confirmar Pedido</button>
          </CoffeesSelected>
        </section>
      </CheckoutPageContainer>
    </Wrapper>
  )
}
