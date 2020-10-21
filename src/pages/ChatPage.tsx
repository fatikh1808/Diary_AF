import React from 'react'
import s from './ChatPage.module.css';
import ChatList from "../components/content/chatList/ChatList";
import NewMessages from "../components/content/newMessages/NewMessages";
import DialogsInput from "../components/content/dialogsInput/DialogsInput";


const ChatPage = () => {

    return (
        <div className={s.ChatPage}>
            <ChatList/>
            <NewMessages/>
            <DialogsInput/>
        </div>
    )
}

export default ChatPage;