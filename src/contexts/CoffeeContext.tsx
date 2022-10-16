import { createContext, useState, ReactNode, useEffect } from 'react'
import { Coffee, coffeesList } from '../data/coffees'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffees: Coffee[]
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider(props: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesList)

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {props.children}
    </CoffeeContext.Provider>
  )
}
