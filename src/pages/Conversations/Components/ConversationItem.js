import classes from './ConversationItem.module.css';
import AvatarChat from '../../../components/UI/AvatarChat';
import bellIcon from '../../../assets/Web 1366 – 3/notification-icon.svg';
import { Link } from 'react-router-dom';

const ConversationItem = props => {
    let username = localStorage.getItem('username');
    return(
        <Link className={classes.link} to={`/conversation/${props.name}/${username}`}>
        <li className={classes.container}>
            <div className={classes.left}>
                <AvatarChat userID={props.id} key={props.id} />
                <h3>{props.children}</h3>
            </div>
            <img src={bellIcon} className={classes.notification} alt="notification" />
        </li>
        </Link>
    )
}

export default ConversationItem;