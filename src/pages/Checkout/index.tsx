import { MapPinLine, CurrencyDollar, Trash, Minus, Plus } from 'phosphor-react'
import { PaymentMethodInput } from './components/PaymentMethodInput'
import {
  AddressContainer,
  CheckoutPageContainer,
  CoffeesSelected,
  HeaderAddress,
  HeaderPayment,
  CoffeeInfo,
  Counter,
  ActionItemPayment,
  InputGridContainer,
  PaymentMethodContainer,
  ButtonRemove,
} from './styles'

export function CheckoutPage() {
  return (
    <CheckoutPageContainer className="wrapper">
      <section>
        <h3>Complete seu pedido</h3>
        <AddressContainer>
          <HeaderAddress>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderAddress>

          <InputGridContainer>
            <div className="grid-1 sm">
              <input type="text" placeholder="CEP" />
            </div>
            <div className="grid-1 full">
              <input type="text" placeholder="Rua" />
            </div>
            <div className="grid-2">
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div className="grid-3">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </InputGridContainer>
        </AddressContainer>
        <PaymentMethodContainer>
          <HeaderPayment>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </HeaderPayment>
          <div>
            <PaymentMethodInput />
            <PaymentMethodInput />
            <PaymentMethodInput />
          </div>
        </PaymentMethodContainer>
      </section>
      <section>
        <h3>Cafés selecionados</h3>
        <CoffeesSelected>
          <CoffeeInfo>
            <img src="public/tradicional.png" alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <ActionItemPayment>
                <Counter>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </Counter>
                <ButtonRemove>
                  <Trash />
                  Remover
                </ButtonRemove>
              </ActionItemPayment>
            </div>
            <strong>R$ 9,90</strong>
          </CoffeeInfo>
          <CoffeeInfo>
            <img src="public/latte.png" alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <ActionItemPayment>
                <Counter>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </Counter>
                <ButtonRemove>
                  <Trash />
                  Remover
                </ButtonRemove>
              </ActionItemPayment>
            </div>
            <strong>R$ 9,90</strong>
          </CoffeeInfo>

          <footer>
            <div>
              <span>Total de itens</span>
              <span>Entrega</span>
              <strong>Total</strong>
            </div>

            <div>
              <span className="total-items">R$ 29,70</span>
              <span>R$ 3,50</span>
              <strong>R$ 33,20</strong>
            </div>
          </footer>

          <button type="submit">Confirmar Pedido</button>
        </CoffeesSelected>
      </section>
    </CheckoutPageContainer>
  )
}
