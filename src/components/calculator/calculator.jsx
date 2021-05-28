import React from 'react';
import * as classes from './calculator.module.css';
import Display from '../../pages/display/display';
import Button from '../../pages/button/button';

import { operations } from '../../utils/logic';
import buttons from '../../utils/buttons';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: '',
            resultValue: 0
        }
    }

    change = () => {
        const display = document.getElementById('display').value;
        this.setState(state => {return {...state, displayValue: display}});
    }

    performOperation = () => {
        const display = document.getElementById('display').value;
        this.setState(state => { return {...state, displayValue: operations.performOperation(display)}});
    }

    render() {
        return (
            <div className={classes.container}>
                <input type="text" id="display" onChange={() => this.change()}/>
                <button onClick={() => this.performOperation()}>=</button>
                <div id="result"></div>
                <Display displayValue={this.state.displayValue} resultValue={this.state.resultValue}/>
                <div className={classes.buttonsContainer}>
                    { buttons.map(button => <div className={classes.button}  style={{backgroundColor: button.backgroundColor ? button.backgroundColor : '#131313'}}>
                        <Button button={button.value}/>
                    </div>) }
                </div>
                <Button />
            </div>
        );
    }
}

export default Calculator;