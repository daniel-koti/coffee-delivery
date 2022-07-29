import { CoffeeItem } from './components/CoffeeItem'
import { Intro } from './components/Intro'
import { CoffeeList, HomePageContainer } from './styles'

import { coffees } from '../../data/coffees'

export function HomePage() {
  return (
    <HomePageContainer>
      <Intro />

      <CoffeeList className="wrapper">
        <h2>Nossos cafés</h2>
        <div className="coffee-container">
          {coffees.map((coffee) => {
            return <CoffeeItem item={coffee} key={coffee.id} />
          })}
        </div>
      </CoffeeList>
    </HomePageContainer>
  )
}
