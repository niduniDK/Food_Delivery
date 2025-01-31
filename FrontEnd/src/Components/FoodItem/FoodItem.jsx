import React from 'react'
import './FoodItem.css'

const FoodItem = ({name, image, price, description, category}) => {
  return (
    <div className='food-item'>
      <img src={image} alt="" />
      <div className="food-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default FoodItem
