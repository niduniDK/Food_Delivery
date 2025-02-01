import React from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { food_list } from '../../assets/assets'

const FoodDisplay = () => {
  return (
    <div className='food-display' id='food-display'>
      <h2 className='food-display-title'>Food Display</h2>
      <div className="food-items">
        {food_list.map((item, index) => {
          return <FoodItem name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
