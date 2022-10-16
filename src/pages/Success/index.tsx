import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { OrderDetailsContent, SuccessPageContainer } from './styles'

import motoboyImg from '../../assets/motoboy.svg'
import { IconCircle } from '../../components/IconCircle'
import { useTheme } from 'styled-components'
import { Wrapper } from '../../components/Wrapper'

export function SuccessPage() {
  const { colors } = useTheme()

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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </li>
            <li>
              <IconCircle
                iconSVG={<Timer weight="fill" />}
                iconBg={colors['brand-yellow']}
              />
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </li>
            <li>
              <IconCircle
                iconSVG={<CurrencyDollar weight="fill" />}
                iconBg={colors['brand-yellow-dark']}
              />
              <div>
                <p>Pagamento de entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </li>
          </OrderDetailsContent>
          <img src={motoboyImg} alt="Entregador de café" />
        </div>
      </SuccessPageContainer>
    </Wrapper>
  )
}
