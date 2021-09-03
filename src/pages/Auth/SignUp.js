import classes from './SignUp.module.css';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Avatar from '../../components/UI/Avatar';
import Container from '../../components/UI/Container';
import { Link } from 'react-router-dom';
import {  useState } from 'react';

const SignUp = props => {
    const [username, setUsernameState] = useState('');
    const roomname = 'groupchat';

    const handleUsernameChanged = async e => {
        setUsernameState(e.target.value);
    }

    const sendData = () => {
        if (username !== '') {
            props.socket.auth = { username }
            props.socket.emit("joinRoom", { username, roomname });
            console.log(props.socket.id);
            localStorage.setItem('username', username);
        } else {
            alert("username is a must!");
            window.location.reload();
        }
    }

    return (
        <div className={classes.wrapper}>
            <Container >
                <div className={classes.avatarSection}>
                    <h2 className={classes.avatarTitle}>Change your avatar</h2>
                    <Avatar />
                </div>
                <div className={classes.input}>
                    <Input type={'text'} value={username} onChange={handleUsernameChanged}>Your nickname</Input>
                </div>
                <div className={classes.button}>
                    <Link to='/conversations'>
                        <Button type="button" onClick={sendData} styled={'next'}>Join chat</Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default SignUp;