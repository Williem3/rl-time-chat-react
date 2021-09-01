import classes from './Conversations.module.css';
import ConversationItem from './Components/ConversationItem';
import AvatarChat from '../../components/UI/AvatarChat';

const CHATROOMS = [{
        name: 'Group Chat',
        userID: 1,
        chatID: 'e531fge'
    },
    {
        name: 'Willie',
        userID: 25,
        chatID: 'j42rss2'
    },
    {
        name: 'Henry',
        userID: 24,
        chatID: 'g42eafv'
    },
    {
        name: 'Amy',
        userID: 23,
        chatID: 'kae425rw'
}];

const Conversations = props => {


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
                            (<ConversationItem id={room.userID} key={room.chatID} chatID={room.chatID}>
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