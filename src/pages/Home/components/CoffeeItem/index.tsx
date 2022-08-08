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

interface CoffeeItemProps {
  id: number
  tags: Array<string>
  name: string
  description: string
  photo: string
  price: number
  quantity?: number
}

interface Coffee {
  item: CoffeeItemProps
}

export function CoffeeItem({ item }: Coffee) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddToCart() {
    const coffeToAdd = {
      ...item,
      price: item.price * quantity,
      quantity,
    }

    addCoffeeToCart(coffeToAdd)
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CoffeeItemContainer>
      <HeaderCoffee>
        <img src={`public/${item.photo}`} alt={item.description} />
        <div className="tags">
          {item.tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </div>
      </HeaderCoffee>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <FooterCoffee>
        R$ <span className="price">{item.price}</span>
        <Counter>
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </Counter>
        <Cart onClick={handleAddToCart}>
          <ShoppingCart weight="fill" />
        </Cart>
      </FooterCoffee>
    </CoffeeItemContainer>
  )
}
