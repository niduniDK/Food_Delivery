import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={assets.logo} alt="" className="logo" />
        <h2 className='app-name'>FoodDel</h2>
        <ul className="navbar-items">
          <a href="/" className="navbar-item">Home</a>
          <a href='#explore-menu' className="navbar-item">Explore Menu</a>
          <a href='' className="navbar-item">Mobile App</a>
          <a href='' className="navbar-item">Contact Us</a>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to='/virtual-assistant'><img src={assets.bot} alt="" className='bot'/></Link>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
