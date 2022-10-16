import { CoffeeItem } from './components/CoffeeItem'
import { Intro } from './components/Intro'
import { CoffeesContainer, CoffeesGrid } from './styles'

import { coffees } from '../../data/coffees'
import { Wrapper } from '../../components/Wrapper'

export function Home() {
  return (
    <section>
      <Intro />

      <Wrapper>
        <CoffeesContainer>
          <h2>Nossos cafés</h2>
          <CoffeesGrid>
            {coffees.map((coffee) => {
              return <CoffeeItem item={coffee} key={coffee.id} />
            })}
          </CoffeesGrid>
        </CoffeesContainer>
      </Wrapper>
    </section>
  )
}
