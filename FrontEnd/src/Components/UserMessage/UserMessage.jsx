import React from 'react'
import './UserMessage.css'

const UserMessage = ({text}) => {
  return (
    <div>
      <p className='user-msg'>{text}</p>
    </div>
  )
}

export default UserMessage
