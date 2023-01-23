import { produce } from 'immer'
import { createContext, useState, ReactNode, useReducer } from 'react'
import { Coffee, coffeesList } from '../data/coffees'
import {
  addItemToCart,
  decrementItemAmount,
  incrementItemAmount,
  removeItemFromCart,
  resetCart,
} from '../reducers/coffees/actions'
import { coffeesReducer } from '../reducers/coffees/reducer'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffees: Coffee[]
  cartItems: Coffee[]
  cartQuantity: number
  addCoffeeToCart: (coffee: Coffee) => void
  incrementCoffeeAmount: (id: number, type: 'list' | 'cart') => void
  decrementCoffeeAmount: (id: number, type: 'list' | 'cart') => void
  removeCoffeeInCart: (id: number) => void
  resetCartItems: () => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider(props: CoffeeContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: coffeesList,
    cartItems: [],
  })

  const cartQuantity = coffeesState.cartItems.length

  const { cartItems, coffees } = coffeesState

  function addCoffeeToCart(coffee: Coffee) {
    dispatch(addItemToCart(coffee))
  }

  function incrementCoffeeAmount(id: number, option: 'list' | 'cart') {
    dispatch(incrementItemAmount(id, option))
  }

  function decrementCoffeeAmount(id: number, option: 'list' | 'cart') {
    dispatch(decrementItemAmount(id, option))
  }

  function removeCoffeeInCart(id: number) {
    dispatch(removeItemFromCart(id))
  }

  function resetCartItems() {
    dispatch(resetCart())
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        cartItems,
        cartQuantity,
        incrementCoffeeAmount,
        decrementCoffeeAmount,
        addCoffeeToCart,
        removeCoffeeInCart,
        resetCartItems,
      }}
    >
      {props.children}
    </CoffeeContext.Provider>
  )
}
