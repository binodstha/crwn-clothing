import React from 'react';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { selectcartItemCounts } from '../../redux/cart/cart.selectors';


import './cart-icon.styles.scss';


const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
  itemCount: selectcartItemCounts(state)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);