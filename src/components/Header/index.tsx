import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

import { HeaderContainer, HeaderButtonsContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Wrapper } from '../Wrapper'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Wrapper>
        <div>
          <NavLink to="/" className="logo">
            <img src={logoImg} alt="" />
          </NavLink>

          <HeaderButtonsContainer>
            <span>
              <MapPin weight="fill" size={22} />
              Porto Alegre, RS
            </span>

            <NavLink to="/checkout" className="cart-container">
              {cartQuantity > 0 && <span>{cartQuantity}</span>}
              <ShoppingCart weight="fill" size={22} />
            </NavLink>
          </HeaderButtonsContainer>
        </div>
      </Wrapper>
    </HeaderContainer>
  )
}
