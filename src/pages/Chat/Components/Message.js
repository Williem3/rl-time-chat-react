import classes from './Message.module.css';
import React, { Component } from 'react';
import AvatarChat from '../../../components/UI/AvatarChat';
import ChatBubble from '../../../components/UI/ChatBubble';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            ownersMessage: false,
        }
    }


    componentDidMount() {
        if (this.props.userID === parseInt(localStorage.getItem('userID'))) {
            console.log('test');
            this.setState({
                ownersMessage: true
            })
        }
    }

    render() {
        const unownedMessage = 
            <li className={classes.message}>
                <div className={classes.avatar}>
                    <AvatarChat userID={this.props.userID}/>
                </div>
                <div className={classes.bubble}>
                    <ChatBubble userID={this.props.userID}>
                        {this.props.children}
                    </ChatBubble>
                </div>
            </li>
        const ownedMessage = 
        <li className={classes.ownerMessage}>
            <div className={classes.bubble}>
                <ChatBubble userID={this.props.userID}>
                    {this.props.children}
                </ChatBubble>
            </div>
            <div className={classes.avatar}>
                <AvatarChat userID={this.props.userID} />
            </div>
        </li>


        return(
            <>
                {!this.state.ownersMessage ? unownedMessage : ownedMessage}
            </>
        )
    }
}
export default Message;