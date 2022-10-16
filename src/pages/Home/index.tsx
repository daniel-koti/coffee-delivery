import { useContext } from 'react'

import { CoffeeItem } from './components/CoffeeItem'
import { Intro } from './components/Intro'
import { Wrapper } from '../../components/Wrapper'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { CoffeesContainer, CoffeesGrid } from './styles'

export function Home() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <section>
      <Intro />

      <Wrapper>
        <CoffeesContainer>
          <h2>Nossos cafés</h2>
          <CoffeesGrid>
            {coffees.map((coffee) => {
              return <CoffeeItem coffee={coffee} key={coffee.id} />
            })}
          </CoffeesGrid>
        </CoffeesContainer>
      </Wrapper>
    </section>
  )
}
