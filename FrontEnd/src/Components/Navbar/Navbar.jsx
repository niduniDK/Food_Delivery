import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <a href='/'><img src={assets.logo} alt="" className="logo" /></a>
        <h2 className='app-name'><a href="/">FoodDel</a></h2>
        <ul className="navbar-items">
          <a href="/" className="navbar-item">Home</a>
          <a href='#explore-menu' className="navbar-item">Explore Menu</a>
          <a href='#mobile-app' className="navbar-item">Mobile App</a>
          <a href='#contact-info' className="navbar-item">Contact Us</a>
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
