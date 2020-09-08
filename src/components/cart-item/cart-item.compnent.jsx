import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: {name, imageUrl,price, quentity} }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="cart" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quentity} X ${price}
      </span>
    </div>   
  </div>      
)

export default CartItem;