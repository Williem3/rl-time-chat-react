import classes from './LandingJumbo.module.css';
import React, { Component, useContext, useEffect, useRef } from 'react';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';


const LandingJumbo = props => {
        const ctx = useContext(AuthContext);

        const username = localStorage.getItem('username');
        const newUserRoute ='/signup';
        const conversationsRoute ='/conversations';


        useEffect(() => {
            if (username) {
                ctx.isAuthenticated = true;
                ctx.username = username;
            }
        }, [ctx]);


        return(
        <>
            <div className={classes.wrapper}>
                <h2 className={classes.slogan}>
                    Chat anywhere with anyone
                </h2>
                <div className={classes.start} >
                    <Link to={username ? conversationsRoute : newUserRoute}>
                        <Button type="button" styled={'next'}>Start chatting</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LandingJumbo;