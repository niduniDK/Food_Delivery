import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  // const navigate = useNavigate();

  return (
    <div className='header'>
      <p>FoodDel is a food delivary app which is mainly focusses on facilitating users to select and 
        place order for their favourite food. It also provides user recommendations helping users to 
        find their favourite foods. The virtual FoodDel helps users to chat with to get information about 
        our services and food items.</p>
      <button className='explore-button'><a href="#food-display">Explore Foods</a></button>
    </div>
  )
}

export default Header
