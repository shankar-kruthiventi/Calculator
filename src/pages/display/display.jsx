import React from 'react';
import * as classes from './display.module.css'; 
const Display = (props) => {
    return (
        <div className={classes.displayContainer}>
            <div className={classes.displayValue}>
                <div>{props.currentOperation}</div>
                <div>{props.displayValue}</div>
            </div>
        </div>

    )
}

export default Display;