import classes from './Chat.module.css';
import { toDecrypt, toEncrypt } from "../../aes";
import { process } from "../../store/action/index";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import AvatarChat from'../../components/UI/AvatarChat';
import usersIcon from '../../assets/Web 1366 – 3/person-icon.svg';
import Message from './Components/Message';
import ChatInput from '../../components/UI/ChatInput';
import sendIcon from '../../assets/Web 1366 – 3/send-icon.svg';
import { useParams } from 'react-router-dom';
import Process from '../../process/Process';
import { v4 as uuidv4} from 'uuid';

// const MESSAGES = [
//     {
//         id: 1,
//         text: 'Hey everyone! My name is Willie!',
//         userID: 25,
//         time:'11:00am'
//     },
//     {
//         id: 2,
//         text: 'Hey Willie! My name is Tanya, how are you doing today?!',
//         userID: 23,
//         time:'11:02am'
//     },
//     {
//         id: 3,
//         text: "I'm great! Thanks for asking, how about you?",
//         userID: 25, 
//         time:'11:03am'
//     }
// ]

const Chat = props => {
    let {roomname, username} = useParams();
    roomname = roomname[0].toUpperCase() + roomname.slice(1, roomname.length);
    roomname = roomname.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);

    const dispatch = useDispatch();

    const dispatchProcess = (encrypt, msg, cipher) => {
        dispatch(process(encrypt, msg, cipher));
    };


    useEffect(() => {
        console.log('test works, now testing socket');
        props.socket.on("message", (data) => {
            const ans = toDecrypt(data.text, data.username);
            dispatchProcess(false, ans, data.text);
            console.log('testing');
            let temp = messages;
            temp.push({
                userID: data.userID,
                username: data.username,
                text: ans,
                id: uuidv4()
            });
            setMessages([...temp]);
        });
    }, [props.socket]);

    const sendData = () => {
        if (text !== "") {
            const ans = toEncrypt(text);
            props.socket.emit("chat", ans);
            setText("");
        }
    }

    const handleMessageChanged = (event) => {
        setText(event.target.value);
    }

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);


    return (
        <>
            <div className={classes.wrapper}>
                <header className={classes.header}>
                    <section className={classes.headerLeft}>
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor">  <circle cx="12" cy="12" r="10" />  <polyline points="12 8 8 12 12 16" />  <line x1="16" y1="12" x2="8" y2="12" /></svg>
                        <AvatarChat userID={25} />  
                        <h3 className={classes.user}>Willie</h3>
                        <h3>{roomname}</h3>
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
                        {messages.map(message => (
                                <Message key={message.id} userID={message.userID}>
                                    {message.text}
                                </Message>
                        ))}
                        <div ref={messagesEndRef}/>
                    </ul>
                </div>

                <div className={classes.inputSection}>
                    <div className={classes.input}>  
                        <ChatInput type={'text'} onChange={handleMessageChanged} sendData={sendData} value={text}/>
                        <button className={classes.sendBtn} onClick={sendData}><img src={sendIcon} className={classes.sendIcon} alt='Send Icon'/></button>
                    </div>
                </div>
            </div>
            {/* <div className="right">
                <Process />
            </div> */}

        </>
    )
}

export default Chat;
