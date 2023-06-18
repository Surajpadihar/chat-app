import React, { useContext } from 'react'
import Input from './Input'
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import Messages from './Messages';
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <VideocamTwoToneIcon/>
        <PersonAddAltTwoToneIcon/>
         <MoreHorizTwoToneIcon/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat

// {data.user?.displayName}