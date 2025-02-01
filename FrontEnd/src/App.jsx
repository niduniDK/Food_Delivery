import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import VirtualAssistant from './Components/VirtualAssistant/VirtualAssistant'

const App = () => {
  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/virtual-assistant' element={<VirtualAssistant/>}/>
        </Routes>
      </div>
    </>

  )
}

export default App
