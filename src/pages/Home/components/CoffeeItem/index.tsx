import { useContext } from 'react'

import {
  CoffeeItemContainer,
  FooterCoffee,
  HeaderCoffee,
  Cart,
  Price,
  ActionsFooterContent,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../../../data/coffees'
import { Actions } from '../../../../components/Actions'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { incrementCoffeeAmount, decrementCoffeeAmount, addCoffeeToCart } =
    useContext(CoffeeContext)

  function handleAddToCart() {
    addCoffeeToCart(coffee)
  }

  return (
    <CoffeeItemContainer>
      <HeaderCoffee>
        <img src={coffee.photo} alt={coffee.description} />
        <div className="tags">
          {coffee.tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </div>
      </HeaderCoffee>
      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>
      <FooterCoffee>
        <Price>
          <span>€</span>
          <span>{coffee.price}</span>
        </Price>
        <ActionsFooterContent>
          <Actions
            quantity={coffee.amount}
            handleIncrement={() => incrementCoffeeAmount(coffee.id, 'list')}
            handleDecrement={() => decrementCoffeeAmount(coffee.id, 'list')}
          />
          <Cart disabled={!coffee.amount} onClick={handleAddToCart}>
            <ShoppingCart weight="fill" />
          </Cart>
        </ActionsFooterContent>
      </FooterCoffee>
    </CoffeeItemContainer>
  )
}
