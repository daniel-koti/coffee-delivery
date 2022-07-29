import {
  CoffeeItemContainer,
  Counter,
  FooterCoffee,
  HeaderCoffee,
  Cart,
} from './styles'

import { ShoppingCart } from 'phosphor-react'

interface CoffeeItemProps {
  id: number
  tags: Array<string>
  name: string
  description: string
  photo: string
  price: number
}

interface Coffee {
  item: CoffeeItemProps
}

export function CoffeeItem({ item }: Coffee) {
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
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </Counter>
        <Cart>
          <ShoppingCart weight="fill" />
        </Cart>
      </FooterCoffee>
    </CoffeeItemContainer>
  )
}
