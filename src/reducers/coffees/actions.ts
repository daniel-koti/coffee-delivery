import { Coffee } from '../../data/coffees'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREMENT_ITEM_AMOUNT = 'INCREMENT_ITEM_AMOUNT',
  DECREMENT_ITEM_AMOUNT = 'DECREMENT_ITEM_AMOUNT',
  RESET_CART = 'RESET_CART',
}

export function addItemToCart(item: Coffee) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function removeItemFromCart(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  }
}

export function incrementItemAmount(id: number, option: 'list' | 'cart') {
  return {
    type: ActionTypes.INCREMENT_ITEM_AMOUNT,
    payload: {
      id,
      option,
    },
  }
}

export function decrementItemAmount(id: number, option: 'list' | 'cart') {
  return {
    type: ActionTypes.DECREMENT_ITEM_AMOUNT,
    payload: {
      id,
      option,
    },
  }
}

export function resetCart() {
  return {
    type: ActionTypes.RESET_CART,
  }
}
