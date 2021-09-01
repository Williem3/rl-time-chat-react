import classes from './LandingPage.module.css';
import React from 'react';
import LandingJumbo from './LandingJumbo';
import image from '../../assets/Web 1366 – 3/hand-with-mobile.png';

const LandingPage = props => {


    return (
        <div className={classes.container}> 
            <div className={classes.stage}>
                <div className={classes.wrapper}>
                    <LandingJumbo/>
                </div>
            </div>
            <div className={classes.stageSide}>
                <img src={image} alt="hand with mobile" className={classes.image}/>
            </div>
        </div>
    )
}

export default LandingPage;