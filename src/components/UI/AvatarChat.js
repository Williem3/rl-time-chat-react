import classes from './AvatarChat.module.css';
import profileImage from '../../assets/Web 1366 – 3/user-icon.svg'

const AvatarChat = props => {

    let avatar = localStorage.getItem('profilePicture');
    let ID = localStorage.getItem('userID');

    if (!avatar || props.userID !== parseInt(ID)) {
        return (
            <div className={classes.wrapper}>
                <img src={profileImage} alt="userSetPicture" className={classes.profilePicture}/>
            </div>
        )
    } else {
        return (
            <div className={classes.wrapper}>
                <img src={avatar} alt="userSetPicture" className={classes.profilePicture}/>
            </div>
        )
    }

    
}

export default AvatarChat;