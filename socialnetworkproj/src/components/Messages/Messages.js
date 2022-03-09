import React from "react";
import { addMessageAC, onMessageChangeAC } from "../../data/messageReducer";
import classes from './Messages.module.css'
import MessagesItem from "./MessagesItem/MessagesItem";
import MessageText from "./MessageText/MessageText";

function Messages(props){
    let messageText = React.createRef()
    let addMessage = ()=>{
        if (messageText.current.value.trim() !== ''){
            props.dispatch(addMessageAC())
            messageText.current.value = ''
        }
    }
    let onMessageChange = ()=>{
        props.dispatch(onMessageChangeAC(messageText.current.value))
    }
    return(
        <div className="messages">
            <div className="friends">
                <MessagesItem name='Danila'/>
            </div>
            <div className={classes.dialogues}>
                {props.messagePage.messageTexts.map((el)=><MessageText text={el.text} key={el.id}/>)}
                <textarea className={classes.mesBtn} ref={messageText} value={props.messagePage.newMessageText} onChange={onMessageChange}></textarea>
                <button className={classes.mesBtn} onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Messages