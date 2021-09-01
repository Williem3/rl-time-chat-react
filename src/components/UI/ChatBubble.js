import classes from './ChatBubble.module.css'
import React from 'react';

const ChatBubble = props => {
    const ID = localStorage.getItem('userID');
    if (props.userID === parseInt(ID)) {
        return (
            <div className={classes.ownerWrapper}>
                <p className={classes.message}>
                    {props.children}
                </p>
            </div>
        )
    } else {

        return(
            <div className={classes.wrapper}>
                <p className={classes.message}>
                    {props.children}
                </p>
            </div>
        )
    }


}

export default ChatBubble;