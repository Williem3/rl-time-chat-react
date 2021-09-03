import classes from './Conversations.module.css';
import ConversationItem from './Components/ConversationItem';
import AvatarChat from '../../components/UI/AvatarChat';
import { useState } from 'react';

const CHATROOMS = [{
        name: 'GroupChat',
        userID:23 ,
        chatID: '3rfqegvav'
    }];

const Conversations = props => {
    // const [roomname, setRoomName] = useState('groupchat');


    return (
        <>
            <div className={classes.wrapper}>
                <header className={classes.header}>
                    <AvatarChat userID={25} />  
                    <h3 className={classes.user}>Willie</h3>
                </header>

                <div className={classes.conversations}>
                    <div className={classes.titleSection}>
                        <h3 className={classes.title}>Conversations</h3>
                    </div>

                    <ul className={classes.list}>
                        {CHATROOMS.map(room => 
                            (<ConversationItem id={room.userID} key={room.chatID} chatID={room.chatID} name={room.name}>
                            {room.name}
                            </ConversationItem>)
                        )}
                </ul>
                </div>
            </div>
        </>
    )
}

export default Conversations;