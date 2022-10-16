import {
  CoffeeItemContainer,
  Counter,
  FooterCoffee,
  HeaderCoffee,
  Cart,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Coffee } from '../../../../data/coffees'

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
        R$ <span className="price">{coffee.price}</span>
        <Counter>
          <button onClick={decrementQuantity}>-</button>
          <span>{coffee.amount}</span>
          <button onClick={incrementQuantity}>+</button>
        </Counter>
        <Cart onClick={handleAddToCart}>
          <ShoppingCart weight="fill" />
        </Cart>
      </FooterCoffee>
    </CoffeeItemContainer>
  )
}
