import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Login = () => {

  const navigate = useNavigate();

  return (
    <div>

      <form className='login-form'>
        
        <div className='welcome-msg'>
          <h1 className='phrase-1'>Welco</h1> 
          <h1 className='phrase-2'>me t</h1>
          <h1 className='phrase-3'>o Foo</h1>
          <h1 className='phrase-4'>dDel!</h1>
        </div>
        <div className="login-header">
          <a href='/'><img src={assets.logo} alt="" className="logo" /></a>
        </div>
        <h3 className='login-title'>Login Here</h3>
        <input type="text" placeholder='Enter username' required />
        <input type="password" placeholder='Enter password' required />
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        <button className='login-button' type='submit' onSubmit={() => navigate('/home')}>Login</button>
      </form>

    </div>
  )
}

export default Login
