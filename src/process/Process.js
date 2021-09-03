import { useSelector } from "react-redux";
import classes from './Process.module.css';

const Process = () => {
    const state = useSelector((state) => state.ProcessReducer);

    return (
        <div className={classes.process}>
            <h5 className={classes.h5}>
                Secret Key: <span className={classes.span}>'vTe4ywBWf4LEYJSsePvXZv4XH'</span>
            </h5>
            <div className={classes.incoming}>
                <h4 className={classes.h4}>Incoming Data</h4>
                <p className={classes.p}>{state.cypher}</p>
            </div>
            <div className="classes.crypt">
                <h4 className={classes.h4}>Decrypted Data</h4>
                <p className={classes.p}>{state.text}</p>
            </div>
        </div>
    )
}

export default Process;