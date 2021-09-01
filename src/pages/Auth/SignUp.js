import classes from './SignUp.module.css';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Avatar from '../../components/UI/Avatar';
import Container from '../../components/UI/Container';
import { Link } from 'react-router-dom';
import  socket from '../../socket';
import AuthContext from '../../store/auth-context';
import { useContext, useState } from 'react';

const SignUp = props => {
    const ctx = useContext(AuthContext);
    const [username, setUsernameState] = useState('');
    const userID = localStorage.getItem("userID");

    const handleUsernameChanged = async e => {
        setUsernameState(e.target.value);
    }



    const onNewAuthentication = () => {
        socket.auth = { username };
        // socket.connect();
        socket.io.on("connect", () => {
            console.log('test');
        })
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
                        <Button type="button" onClick={onNewAuthentication} styled={'next'}>Join chat</Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default SignUp;