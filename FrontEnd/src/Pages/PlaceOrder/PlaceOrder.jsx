import React from 'react'
import './PlaceOrder.css'
import { Form } from 'react-router-dom'

const PlaceOrder = () => {
  return (
    <div className='place-order'>
      <h2>Place Order</h2>
      <div className="place-order-container">
        <form className='place-order-form'>
          <input type="text" placeholder='Name' className='order-input'/>
          <input type="text" placeholder='Email' className='order-input'/>
          <input type="text" placeholder='Address' className='order-input'/>
          <input type="text" placeholder='City' className='order-input'/>
          <input type="text" placeholder='Postal Code' className='order-input'/>
        </form>
        <button className='place-order-btn'>Place Order</button>
      </div>
    </div>
  )
}

export default PlaceOrder
