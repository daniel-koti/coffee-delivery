import { produce } from 'immer'
import { createContext, useState, ReactNode, useEffect } from 'react'
import { Coffee, coffeesList } from '../data/coffees'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffees: Coffee[]
  incrementCoffeeAmount: (id: number) => void
  decrementCoffeeAmount: (id: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider(props: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesList)

  function incrementCoffeeAmount(idCoffee: number) {
    const incrementedCoffees = produce(coffees, (draft) => {
      const findCoffeeToIncrementAmount = draft.find(
        (coffee) => coffee.id === idCoffee,
      )

      if (findCoffeeToIncrementAmount) {
        findCoffeeToIncrementAmount.amount += 1
      }
    })

    setCoffees(incrementedCoffees)
  }

  function decrementCoffeeAmount(idCoffee: number) {
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
  }

  return (
    <CoffeeContext.Provider
      value={{ coffees, incrementCoffeeAmount, decrementCoffeeAmount }}
    >
      {props.children}
    </CoffeeContext.Provider>
  )
}
