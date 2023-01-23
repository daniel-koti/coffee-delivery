import { Coffee } from '../../data/coffees'
import { ActionTypes } from './actions'
import { produce } from 'immer'

interface CoffeesState {
  coffees: Coffee[]
  cartItems: Coffee[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        const isAlreadyCoffeeInCart = state.cartItems.findIndex(
          (coffee) => coffee.id === action.payload.item.id,
        )

        if (isAlreadyCoffeeInCart < 0) {
          draft.cartItems.push(action.payload.item)
        } else {
          draft.cartItems[isAlreadyCoffeeInCart].amount =
            action.payload.item.amount
        }
      })

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        console.log('reduz')
        const cartWithoutItemRemoved = state.cartItems.filter(
          (coffee) => coffee.id !== action.payload.id,
        )

        draft.cartItems = cartWithoutItemRemoved
      })

    case ActionTypes.INCREMENT_ITEM_AMOUNT:
      return produce(state, (draft) => {
        if (action.payload.option === 'list') {
          const foundItemToIncrement = state.coffees.findIndex(
            (coffee) => coffee.id === action.payload.id,
          )

          if (foundItemToIncrement >= 0) {
            draft.coffees[foundItemToIncrement].amount += 1
          }
        } else {
          const foundItemToIncrement = state.cartItems.findIndex(
            (coffee) => coffee.id === action.payload.id,
          )

          if (foundItemToIncrement >= 0) {
            draft.cartItems[foundItemToIncrement].amount += 1
          }
        }
      })

    case ActionTypes.DECREMENT_ITEM_AMOUNT:
      return produce(state, (draft) => {
        if (action.payload.option === 'list') {
          console.log('Decrement list')
          const foundItemToIncrement = state.coffees.findIndex(
            (coffee) => coffee.id === action.payload.id,
          )

          if (foundItemToIncrement >= 0) {
            draft.coffees[foundItemToIncrement].amount > 0
              ? (draft.coffees[foundItemToIncrement].amount -= 1)
              : (draft.coffees[foundItemToIncrement].amount = 0)
          }
        } else {
          console.log('Decrement cart')
          const foundItemToIncrement = state.cartItems.findIndex(
            (coffee) => coffee.id === action.payload.id,
          )

          if (foundItemToIncrement >= 0) {
            draft.cartItems[foundItemToIncrement].amount > 1
              ? (draft.cartItems[foundItemToIncrement].amount -= 1)
              : (draft.cartItems[foundItemToIncrement].amount = 1)
          }
        }
      })

    case ActionTypes.RESET_CART:
      return produce(state, (draft) => {
        draft.cartItems = []
      })
    default:
      return state
  }
}
