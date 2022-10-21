import { BenefitsContainer, IntroContainer, IntroContent } from './styles'
import coffeeDelivery from '../../../../assets/coffee-delivery.svg'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { Wrapper } from '../../../../components/Wrapper'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <Wrapper>
        <IntroContent>
          <div>
            <section>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </section>

            <BenefitsContainer>
              <InfoWithIcon
                icon={<ShoppingCart weight="fill" />}
                iconBg={colors['brand-yellow-dark']}
                text="Compra simples e segura"
              />
              <InfoWithIcon
                icon={<Package weight="fill" />}
                iconBg={colors['base-text']}
                text="Embalagem mantém o café intacto"
              />
              <InfoWithIcon
                icon={<Timer weight="fill" />}
                iconBg={colors['brand-yellow']}
                text="Entrega rápida e rastreada"
              />
              <InfoWithIcon
                icon={<Coffee weight="fill" />}
                iconBg={colors['brand-purple']}
                text="O café chega fresquinho até você"
              />
            </BenefitsContainer>
          </div>

          <img src={coffeeDelivery} alt="" />
        </IntroContent>
      </Wrapper>
    </IntroContainer>
  )
}
