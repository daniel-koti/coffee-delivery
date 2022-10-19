import { produce } from 'immer'
import { createContext, useState, ReactNode, useEffect } from 'react'
import { Coffee, coffeesList } from '../data/coffees'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffees: Coffee[]
  cartItems: Coffee[]
  cartQuantity: number
  addCoffeeToCart: (coffee: Coffee) => void
  incrementCoffeeAmount: (id: number, type: 'coffees' | 'cart') => void
  decrementCoffeeAmount: (id: number, type: 'coffees' | 'cart') => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider(props: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesList)
  const [cartItems, setCartItems] = useState<Coffee[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: Coffee) {
    const isCoffeeAlreadyInCart = cartItems.findIndex(
      (item) => item.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (isCoffeeAlreadyInCart < 0) {
        draft.push(coffee)
      } else {
        draft[isCoffeeAlreadyInCart].amount = coffee.amount
      }
    })

    setCartItems(newCart)
  }

  function incrementCoffeeAmount(id: number, type: 'coffees' | 'cart') {
    if (type === 'coffees') {
      const incrementedCoffees = produce(coffees, (draft) => {
        const findCoffeeToIncrementAmount = draft.find(
          (coffee) => coffee.id === id,
        )

        if (findCoffeeToIncrementAmount) {
          findCoffeeToIncrementAmount.amount += 1
        }
      })

      setCoffees(incrementedCoffees)
    } else {
      const incrementedCoffees = produce(cartItems, (draft) => {
        const findCoffeeToIncrementAmount = draft.find(
          (coffee) => coffee.id === id,
        )

        if (findCoffeeToIncrementAmount) {
          findCoffeeToIncrementAmount.amount += 1
        }
      })

      setCartItems(incrementedCoffees)
    }
  }

  function decrementCoffeeAmount(idCoffee: number, type: 'coffees' | 'cart') {
    if (type === 'coffees') {
      const decrementedCoffees = produce(coffees, (draft) => {
        const findCoffeeToDecrementAmount = draft.find(
          (coffee) => coffee.id === idCoffee,
        )

        if (
          findCoffeeToDecrementAmount &&
          findCoffeeToDecrementAmount.amount !== 0
        ) {
          findCoffeeToDecrementAmount.amount -= 1
        }
      })

      setCoffees(decrementedCoffees)
    } else {
      const decrementedCoffees = produce(cartItems, (draft) => {
        const findCoffeeToDecrementAmount = draft.find(
          (coffee) => coffee.id === idCoffee,
        )

        if (
          findCoffeeToDecrementAmount &&
          findCoffeeToDecrementAmount.amount !== 0
        ) {
          findCoffeeToDecrementAmount.amount -= 1
        }
      })

      setCartItems(decrementedCoffees)
    }
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
      }}
    >
      {props.children}
    </CoffeeContext.Provider>
  )
}
