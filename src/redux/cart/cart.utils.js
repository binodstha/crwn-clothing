export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCardItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCardItem) {
    return cartItems.map(
      cartItem =>
        cartItem.id === cartItemToAdd.id ?
          { ...cartItem, quentity: cartItem.quentity + 1 } :
          cartItem
    )
  }

  return [...cartItems, {...cartItemToAdd, quentity : 1}]

}

