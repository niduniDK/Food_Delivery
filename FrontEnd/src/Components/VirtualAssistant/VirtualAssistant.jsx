import React, { useState } from 'react'
import './VirtualAssistant.css'
import Message from '../Message/Message';
import Navbar from '../Navbar/Navbar';
import UserMessage from '../UserMessage/UserMessage';
import { assets } from '../../assets/assets';
import VirtualAssistantFooter from '../VirtualAssistantFooter/VirtualAssistantFooter';

const VirtualAssistant = () => {

    const text = "Hi there!";
    // const user_text = "Hi I need to know the status of my order";
    const [userText, setUserText] = useState('Hi! I need to trending food items in your company');

  return (
    <div>
        <Navbar />
        <Message text={text} />
        <UserMessage text={userText} />
        <VirtualAssistantFooter/>
    </div>
  )
}

export default VirtualAssistant
