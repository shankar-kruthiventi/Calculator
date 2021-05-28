import React from 'react';
import * as classes from './button.module.css';

const Button = (props) => {
    return (
        <div className={classes.button}>
            {props.button}
        </div>

    )
}

export default Button;