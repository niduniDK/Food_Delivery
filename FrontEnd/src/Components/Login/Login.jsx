import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

  return (
    <div>
      <form className='login-form'>
        <input type="text" placeholder='Enter username'/>
        <input type="password" placeholder='Enter password'/>
      </form>
      <button className='login-button' type='submit' onSubmit={() => navigate('/')}>Login</button>
    </div>
  )
}

export default Login
