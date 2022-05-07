import React from 'react'
import "./Chat.css"
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar , IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className='chat'>
        <div className="chat_header">
          <Avatar />
          <div className="chat_header_info">
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>
          <div className="chat_headerRight">
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <DonutLargeIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
          </div>
        </div>

        <div className="chat_body">
        <p className='chat_message'>
            <span className='chat_name'>Sonny</span>
                This is a message
            <span className='chat_timestamp'>
              {new Date().toUTCString()}
            </span>
        </p>
        <p className='chat_message chat_reciever'>
            <span className='chat_name'>Sonny</span>
                This is a message
            <span className='chat_timestamp'>
              {new Date().toUTCString()}
            </span>
        </p>
        <p className='chat_message'>
            <span className='chat_name'>Sonny</span>
                This is a message
            <span className='chat_timestamp'>
              {new Date().toUTCString()}
            </span>
        </p>
        </div>

      <div className="chat_footer">
        <TagFacesIcon/>
        <form>
          <input placeholder='Type a message' type="text" />
          <button type='submit'>Send a message</button>
        </form>
        <MicIcon/>
      </div>

    </div>
  )
}

export default Chat