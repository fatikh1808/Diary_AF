import s from "./NewMessages.module.css";
import React from "react";
import ChatSender from "../chatSender/ChatSender";

const NewMessages = () => {
    return (
        <div className={s.NewMessages}>
           <ChatSender className={'left'}/>
           <ChatSender className={'right'}/>
            <ChatSender className={'left'}/>
            <ChatSender className={'right'}/>
            <ChatSender className={'left'}/>
            <ChatSender className={'right'}/>
        </div>
    )
}

export default NewMessages;