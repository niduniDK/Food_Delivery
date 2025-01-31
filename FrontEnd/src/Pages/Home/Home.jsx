import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import { assets } from '../../assets/assets'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <ExploreMenu />
      <FoodDisplay />
    </div>
  )
}

export default Home
