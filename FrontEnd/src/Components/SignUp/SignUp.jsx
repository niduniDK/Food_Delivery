import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SignUp = () => {

    const navigate = useNavigate();

    return (
        <div>

            <form className='signup-form'>

                <div className='welcome-msg'>
                    <h1 className='phrase-1'>Welco</h1>
                    <h1 className='phrase-2'>me t</h1>
                    <h1 className='phrase-3'>o Foo</h1>
                    <h1 className='phrase-4'>dDel!</h1>
                </div>
                <div className="signup-header">
                    <a href='/'><img src={assets.logo} alt="" className="logo" /></a>
                </div>
                <h3 className='signup-title'>Create an account Here</h3>
                <input type="text" placeholder='Enter username' required />
                <input type="text" placeholder='Enter email address' required />
                <input type="password" placeholder='Enter password' required />
                <p>Already have an account? <a href="/login">Login</a></p>
                <button className='login-button' type='submit' onSubmit={() => navigate('/home')}>Sign Up</button>
            </form>

        </div>
    )
}

export default SignUp
