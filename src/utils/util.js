import { evaluate } from 'mathjs';

const specialOperands = ['undo', 'copy', 'delete', 'CE', 'C', 'backspace','ON'];

const performOperation = (value) => {
    let result;
    try {
        result = evaluate(value);
    } catch(err) {
        result = 'syntax error';
    } finally {
        return result; 
    }
}

const specialOperations = (value, key) => {
    if(key === 'CE') {
        return '';
    } else if(key === 'C') {
        return value.slice(0, value.length-1);
    } else if(key === 'delete'){
        return value.slice(1,value.length);
    } else if(key === 'backspace') {
        return value.slice(0, value.length-1);
    } else if(key === 'ON') {
        return value;
    }
}

export const operations = {
    performOperation,
    specialOperands,
    specialOperations
};