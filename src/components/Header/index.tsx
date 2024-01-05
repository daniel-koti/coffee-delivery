import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, InfoHeader, HeaderContent } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Wrapper } from '../Wrapper'

import logoImg from '/public/assets/logo.svg'

export function Header() {
  const { cartQuantity } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <Wrapper>
        <HeaderContent>
          <NavLink to="/">
            <img src={logoImg} alt="" />
          </NavLink>

          <InfoHeader>
            <span>
              <MapPin weight="fill" size={22} />
              Lisboa, LB
            </span>

            <NavLink to="/checkout" className="cart-container">
              {cartQuantity > 0 && <span>{cartQuantity}</span>}
              <ShoppingCart weight="fill" size={22} />
            </NavLink>
          </InfoHeader>
        </HeaderContent>
      </Wrapper>
    </HeaderContainer>
  )
}
