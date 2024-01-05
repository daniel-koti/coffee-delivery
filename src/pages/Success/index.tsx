import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { OrderDetailsContent, SuccessPageContainer, ShopItem } from './styles'

import motoboyImg from '/public/assets/motoboy.svg'
import { IconCircle } from '../../components/IconCircle'
import { useTheme } from 'styled-components'
import { Wrapper } from '../../components/Wrapper'
import { newDeliveryFormData } from '../Checkout'

export function SuccessPage() {
  const { colors } = useTheme()
  const location = useLocation()

  const { city, district, paymentMethods } =
    location.state as newDeliveryFormData

  const payment = {
    money: 'Dinheiro',
    debit: 'Cartão de débito',
    credit: 'Cartão de crédito',
  }

  return (
    <Wrapper>
      <SuccessPageContainer>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <div>
          <OrderDetailsContent>
            <li>
              <IconCircle
                iconSVG={<MapPin weight="fill" />}
                iconBg={colors['brand-purple']}
              />
              <div>
                <p>
                  Entrega em <ShopItem>{city}</ShopItem>
                </p>
                <p>{district}</p>
              </div>
            </li>
            <li>
              <IconCircle
                iconSVG={<Timer weight="fill" />}
                iconBg={colors['brand-yellow']}
              />
              <div>
                <p>Previsão de entrega</p>
                <ShopItem>20 min - 30 min</ShopItem>
              </div>
            </li>
            <li>
              <IconCircle
                iconSVG={<CurrencyDollar weight="fill" />}
                iconBg={colors['brand-yellow-dark']}
              />
              <div>
                <p>Pagamento de entrega</p>
                <ShopItem>{payment[paymentMethods]}</ShopItem>
              </div>
            </li>
          </OrderDetailsContent>
          <img src={motoboyImg} alt="Entregador de café" />
        </div>
      </SuccessPageContainer>
    </Wrapper>
  )
}
