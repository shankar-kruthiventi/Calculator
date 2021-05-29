import React from 'react';
import * as classes from './calculator.module.css';
import Display from '../../pages/display/display';
import Button from '../../pages/button/button';

import { operations } from '../../utils/util';
import buttons from '../../utils/buttons';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: '',
            currentOperation: '',
            operationHistory: [],
            timer: null
        }
    }

    componentDidMount() {
        let timer = setInterval(() => {
            document.getElementById('display').focus();
        }, 400);
        this.setState(state => { return { ...state, timer } });
    }

    componentWillUnmount() {
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }
    }

    change = () => {
        const display = document.getElementById('display').value;
        this.setState(state => { return { ...state, displayValue: display } });
    }

    onEnter = (event) => {
        if (event && event.keyCode === 13) {
            event.preventDefault();
            this.performOperation();
        }
    }

    performOperation = () => {
        const display = document.getElementById('display').value;
        let operationHistory = [...this.state.operationHistory, display]
        let result = operations.performOperation(display);
        document.getElementById('display').value = result;
        this.setState(state => { return { ...state, displayValue: result, operationHistory, currentOperation: display } });
    }

    copyToClipBoard = () => {
        let copyText = document.getElementById("display");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
    undoKeyboardOperation = () => {
        if (this.state.operationHistory.length === 0) {
            this.setState(state => { return { ...state, currentOperation: '', displayValue: '' } });
            return;
        }

        // to update to the last but one operation
        if (this.state.operationHistory.length > 1) {
            this.state.operationHistory.pop();
        }
        let lastOperation = this.state.operationHistory.pop();
        document.getElementById('display').value = lastOperation;

        // to update the displayValue for the lastOperation
        let result = operations.performOperation(lastOperation);
        document.getElementById('display').value = result;

        this.setState(state => { return { ...state, displayValue: result, currentOperation: lastOperation } });
    }

    // to perform operations using keyboard
    keyBoardOperation = (key) => {
        let display = document.getElementById('display').value;
        if (key === '=') {
            this.performOperation();
        } else if (key === 'copy') {
            this.copyToClipBoard();
        } else if (key === 'undo') {
            this.undoKeyboardOperation()
        } else if (operations.specialOperands.indexOf(key) === -1) {
            document.getElementById('display').value = display + key;
            this.change();
        } else {
            if (key === 'CE') {
                let operationHistory = [];
                this.setState(state => { return { ...state, operationHistory, currentOperation: '' } });
            }
            if (key === 'C' && this.state.displayValue.length === 0) {
                this.setState(state => { return { ...state, currentOperation: '' } });
            }
            let result = operations.specialOperations(display, key)
            document.getElementById('display').value = result;
            this.setState(state => { return { ...state, displayValue: result } });
        }
    }

    render() {
        return (
            <div className={classes.container}>
                <input type="text" id="display" autoComplete="off" className={classes.hidden} onChange={() => this.change()} onKeyUp={(event) => this.onEnter(event)} />
                <Display displayValue={this.state.displayValue} currentOperation={this.state.currentOperation} />
                <div className={classes.buttonsContainer}>
                    {buttons.map(button => (<div key={button.value} className={classes.button}
                        style={{ backgroundColor: button.backgroundColor ? button.backgroundColor : 'rgb(43 41 41)' }}
                        onClick={() => this.keyBoardOperation(button.value)}
                    >
                        <Button button={button.value} />
                    </div>))}
                </div>
                <Button />
            </div>
        );
    }
}

export default Calculator;