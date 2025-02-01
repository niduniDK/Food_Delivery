import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <p>FoodDel is a food delivary app which is mainly focusses on facilitating users to select and 
        place order for their favourite food. It also provides user recommendations helping users to 
        find their favourite foods. The virtual FoodDel helps users to chat with to get information about 
        our services and food items.</p>
      <button className='explore-button'>Explore Menu</button>
    </div>
  )
}

export default Header
