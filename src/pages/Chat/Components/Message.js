import classes from './Message.module.css';
import React, { Component, useState, useEffect } from 'react';
import AvatarChat from '../../../components/UI/AvatarChat';
import ChatBubble from '../../../components/UI/ChatBubble';

const Message = (props) => {
    const [ownersMessage, setOwnersMessage] = useState(false);

    useEffect(() => {
        if(props.userID === parseInt(localStorage.getItem('userID'))) {
            console.log('working and is the users message');
            setOwnersMessage(true);
        }
    }, [ownersMessage])

        const unownedMessage = 
            <li className={classes.message}>
                <div className={classes.avatar}>
                    <AvatarChat userID={props.userID}/>
                </div>
                <div className={classes.bubble}>
                    <ChatBubble userID={props.userID}>
                        {props.children}
                    </ChatBubble>
                </div>
            </li>
        const ownedMessage = 
        <li className={classes.ownerMessage}>
            <div className={classes.bubble}>
                <ChatBubble userID={props.userID}>
                    {props.children}
                </ChatBubble>
            </div>
            <div className={classes.avatar}>
                <AvatarChat userID={props.userID} />
            </div>
        </li>


        return(
            <>
                {!ownersMessage ? unownedMessage : ownedMessage}
            </>
        )
}
export default Message;