import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart =>cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemCounts = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quentity , 0
  )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quentity * cartItem.price , 0
  )
)