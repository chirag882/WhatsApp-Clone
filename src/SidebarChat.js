import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

function sidebarChat() {
  return (
    <div className='sicebarChat'>
        <Avatar/>
        <div className="sidebarChat_info">
            <h2>Room Name</h2>
            <p>This is last message</p>
        </div>
    </div>
  )
}

export default sidebarChat