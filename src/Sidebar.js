import React from 'react';
import "./sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar , IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat.js'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <Avatar src="data:image/jpeg;base64,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"/>
            <div className="sidebar_headerRight">
              <IconButton>
                <ChatIcon />
              </IconButton>
              <IconButton>
                <DonutLargeIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
            
        </div>

        <div className='sidebar_search'>
          <div className='sidebar_searchcontainer'>
            <SearchIcon />
            <input placeholder='Search or start new chat' type="text" />
          </div>
        </div>

        <div className="sidebar_chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>

    </div>
  )
}

export default Sidebar