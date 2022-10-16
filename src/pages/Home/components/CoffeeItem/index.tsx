import { useContext, useState } from 'react'

import {
  CoffeeItemContainer,
  FooterCoffee,
  HeaderCoffee,
  Cart,
  Price,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'
import { Coffee } from '../../../../data/coffees'
import { Actions } from '../../../../components/Actions'

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddToCart() {}

  function incrementQuantity() {}

  function decrementQuantity() {}

  return (
    <CoffeeItemContainer>
      <HeaderCoffee>
        <img src={`public/${coffee.photo}`} alt={coffee.description} />
        <div className="tags">
          {coffee.tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </div>
      </HeaderCoffee>
      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>
      <FooterCoffee>
        <Price>{coffee.price}</Price>
        <div>
          <Actions />
          <Cart onClick={handleAddToCart}>
            <ShoppingCart weight="fill" />
          </Cart>
        </div>
      </FooterCoffee>
    </CoffeeItemContainer>
  )
}
