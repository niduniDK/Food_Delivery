import React from 'react'
import './Message.css'
import { assets } from '../../assets/assets'

const Message = ({ text }) => {
    return (
        <div className='message'>
            <img src={assets.bot} alt="" className='bot'/>
            <p className='msg'>{text}</p>
        </div>
    )
}

export default Message
