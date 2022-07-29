import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

import { HeaderContainer, HeaderButtonsContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <NavLink to="/" className="logo">
          <img src={logoImg} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <span>
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </span>

          <NavLink to="/checkout" className="cart-container">
            <span>3</span>
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
