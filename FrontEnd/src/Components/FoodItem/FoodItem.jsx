import React, { useState } from 'react'
import './FoodItem.css'

const FoodItem = ({name, image, price, description, category}) => {

 // const [cartItems, setcartItems] = useState([]);

  return (
    <div className='food-item'>
      <div className="food-details">
        <img src={image} alt=""  className='item-image'/>
        <h2 className='item-name'>{name}</h2>
        <p className='item-desc'>{description}</p>
        <h3 className='item-price'>${price}</h3>
        <h4 className='item-category'>{category}</h4>
        <button className='add-to-cart' >Add to Cart</button>
      </div>
    </div>
  )
}

export default FoodItem
