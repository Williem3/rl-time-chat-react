import React from "react";
import classes from './ChatInput.module.css';
import emojiTag from '../../assets/Web 1366 – 3/happy-face-icon.svg';
const ChatInput = props => {


    const handleKeyPress = (e) => {
            if (e.key === "Enter") {
                props.sendData();
            }
        }

    return(
        <>
            <input type={props.type} value={props.value} className={classes.field} onChange={props.onChange} placeholder='Enter your message here... ' onKeyPress={handleKeyPress} />
            <img src={emojiTag} alt="emoji button" className={classes.emoji} />
        </>
    )
}

export default ChatInput;