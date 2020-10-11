import React from 'react'
import s from './ChatPage.module.css';
import {Typography} from "@material-ui/core";
import ChatList from "../components/content/chatList/ChatList";

const ChatPage = () => {
    return (
        <div className={s.ChatPage}>
            <ChatList/>
            <div className={s.NewMessages}>

            </div>
            <div className={s.MyMessages}>

            </div>
            <div className={s.DialogsInput}>

            </div>
        </div>
    )
}

export default ChatPage;