import React from 'react';
import * as classes from './display.module.css'; 
const Display = (props) => {
    return (
        <div className={classes.displayContainer}>
            <div className={classes.displayValue}>
                {props.displayValue}
            </div>
        </div>

    )
}

export default Display;