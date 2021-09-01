import classes from './Chat.module.css';
import React, { Component } from 'react';
import AvatarChat from'../../components/UI/AvatarChat';
import usersIcon from '../../assets/Web 1366 – 3/person-icon.svg';
import Message from './Components/Message';
import ChatInput from '../../components/UI/ChatInput';
import sendIcon from '../../assets/Web 1366 – 3/send-icon.svg';

const MESSAGES = [
    {
        id: 1,
        text: 'Hey everyone! My name is Willie!',
        userID: 25,
        time:'11:00am'
    },
    {
        id: 2,
        text: 'Hey Willie! My name is Tanya, how are you doing today?!',
        userID: 23,
        time:'11:02am'
    },
    {
        id: 3,
        text: "I'm great! Thanks for asking, how about you?",
        userID: 25, 
        time:'11:03am'
    }
]
class Chat extends Component {
    constructor() {
        super();
        this.state = {
            ownersMessage: false
        };
    }


    componentDidMount(userID = 23) {
        if (userID === parseInt(localStorage.getItem('userID'))) {
            console.log('working and is the users message');
            this.setState({
                ownersMessage: true
            })
        }
    }

    
    
    render() {

        return (
        <>
            <div className={classes.wrapper}>
                <header className={classes.header}>
                    <section className={classes.headerLeft}>
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor">  <circle cx="12" cy="12" r="10" />  <polyline points="12 8 8 12 12 16" />  <line x1="16" y1="12" x2="8" y2="12" /></svg>
                        <AvatarChat userID={25} />  
                        <h3 className={classes.user}>Willie</h3>
                    </section>
                    <section className={classes.headerRight}>
                        <div className={classes.rightItems}>
                            <h3 className="text-xl font-bold text-gray-700">4</h3> 
                            <img src={usersIcon} alt="usericon" />
                        </div>
                    </section>
                </header>

                <div className={classes.chatBody}>
                    <ul className={classes.chatList}>
                        {MESSAGES.map(message => (
                                <Message key={message.id} userID={message.userID}>
                                    {message.text}
                                </Message>
                        ))}
                    </ul>
                </div>

                <div className={classes.inputSection}>
                    <div className={classes.input}>  
                        <ChatInput type={'text'}     />
                        <button className={classes.sendBtn}><img src={sendIcon} className={classes.sendIcon}alt='Send Icon'/></button>
                    </div>
                </div>
            </div>

        </>
        )
    }
}

export default Chat;