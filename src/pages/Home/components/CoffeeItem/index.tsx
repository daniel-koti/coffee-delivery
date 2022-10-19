import { useContext, useState } from 'react'

import {
  CoffeeItemContainer,
  FooterCoffee,
  HeaderCoffee,
  Cart,
  Price,
  ActionsFooterContent,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'
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
    console.log('Adicionou')
  }

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
        <Price>
          <span>R$</span>
          <span>{coffee.price}</span>
        </Price>
        <ActionsFooterContent>
          <Actions
            quantity={coffee.amount}
            handleIncrement={() => incrementCoffeeAmount(coffee.id, 'coffees')}
            handleDecrement={() => decrementCoffeeAmount(coffee.id, 'coffees')}
          />
          <Cart disabled={!coffee.amount} onClick={handleAddToCart}>
            <ShoppingCart weight="fill" />
          </Cart>
        </ActionsFooterContent>
      </FooterCoffee>
    </CoffeeItemContainer>
  )
}
