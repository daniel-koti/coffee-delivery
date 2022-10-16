import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, InfoHeader, HeaderContent } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Wrapper } from '../Wrapper'

import logoImg from '../../assets/logo.svg'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

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
              Porto Alegre, RS
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
