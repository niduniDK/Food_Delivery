import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="contact-info" id='contact-info'>
        <h3>Contact Us</h3>
        <p className='contact-info'>N0.123, Main Road, Colombo, Sri Lanka.</p>
        <p className='contact-info'>+94 123 456 789</p>
        <p className='contact-info'>abc@fooddel.lk</p>
      </div>
      <div className="social-media" >
        <h3>Connect with us</h3>
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
      </div>
      <div className="mobile-app" id='mobile-app'>
        <h3>Download Our Mobile App</h3>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
      
    </div>
  )
}

export default Footer
