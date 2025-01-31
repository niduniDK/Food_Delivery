import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import { assets } from '../../assets/assets'
import Header from '../../Components/Header/Header'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
    </div>
  )
}

export default Home
