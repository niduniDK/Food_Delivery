import React from 'react'
import './Cart.css'
import { Form } from 'react-router-dom'

const Cart = () => {

  const cartItems = []

  return (
    <div className='cart'>
      <div className="cart-items">
        <h2>Cart</h2>
        <div className="cart-item">
              <p>Item</p>
              <p className="item-name">Name</p>
              <p className="item-count">Count</p>
              <p className="price">Price</p>
              <p className="total">Total</p>
            </div>
        {cartItems.map((item) => {
          return (
            <div className="cart-item">
              <img src={item.image} alt="" />
              <p className="item-name">{item.name}</p>
              <p className="item-count">{1}</p>
              <p className="price">${item.price}</p>
              <p className="total">${0}</p>
            </div>
          )
        })}
        <button className='proceed-transaction'>Proceed Order</button>
      </div>
    </div>
  )
}

export default Cart
