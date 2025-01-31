import React from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { food_list } from '../../assets/assets'

const FoodDisplay = () => {
  return (
    <div className='food-display'>
      <h2>Food Display</h2>
      {food_list.map((item, index) => {
        return <FoodItem name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
      })}
    </div>
  )
}

export default FoodDisplay
