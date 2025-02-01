import React from 'react'
import './VirtualAssistantFooter.css'
import { assets } from '../../assets/assets'

const VirtualAssistantFooter = () => {
    return (
        <div>
            <footer className='chat-footer'>
                <img src={assets.bot} alt="" className='bot' />
                <input type="text" className='prompt-input' placeholder='Hello! How can I help you?' />
                <button className='submit-prompt'>Submit</button>
            </footer>
        </div>
    )
}

export default VirtualAssistantFooter
