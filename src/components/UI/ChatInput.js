import React from "react";
import classes from './ChatInput.module.css';
import emojiTag from '../../assets/Web 1366 – 3/happy-face-icon.svg';
const ChatInput = props => {



    return(
        <>
            <div type={props.type} contentEditable className={classes.field}placeholder='Enter your message here... '/>
            <img src={emojiTag} alt="emoji button" className={classes.emoji} />
        </>
    )
}

export default ChatInput;