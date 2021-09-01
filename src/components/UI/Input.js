/* eslint-disable react/jsx-no-duplicate-props */
import classes from './Input.module.css';
import React, { useState } from 'react';

const Input = props => {
    const [pingVisible, setPingVisiblity] = useState(false);

    const onFocus =() => {
        setPingVisiblity(true);
    } 
    const onBlur =() => {
        setPingVisiblity(false);
    }

    const Ping = (event) => {
        if (!event.visible) {
            return null;
        }

        return (
            <div className="w-full">  
                <span className={'ping'} className="absolute inline-flex rounded-full h-2 w-2 bg-green-500">
                    <span className="relative animate-ping h-2 w-2 bg-green-500 rounded-full opacity-75">
                    </span>
                </span>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full max-w-xs">
            <label className={classes.label}>{props.children}</label>
            <div>
                <Ping visible={pingVisible} />
                <input className={classes.input} onChange={props.onChange} value={props.value} onFocus={onFocus} onBlur={onBlur} type={props.type}/>
            </div>
        </div>
    )
}


export default Input;