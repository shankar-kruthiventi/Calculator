import { evaluate } from 'mathjs';

const specialOperands = ['undo', 'copy', 'delete', 'CE', 'C', 'backspace','ON'];

const performOperation = (value) => {
    let result;
    try {
        if(value.includes('sin') || value.includes('cos') || value.includes('tan')) {
            value = value.replace(/\((.*)\)/g, "($1deg)");
        }
        if(value.includes('%')) {
            let index = value.indexOf('%');
            value = value.split('');
            value.splice(index, 1,'*(1/100)*');
            value = value.join('');
            result = Math.floor(evaluate(value));
            return result;
        }   
        result = evaluate(value);
    } catch(err) {
        result = err.toString().split('\n')[0];
    } finally {
        return result ? result : 0; 
    }
}

const specialOperations = (value,key) => {
    if(key === 'CE') {
        return '';
    }  else if(key === 'delete'){
        return value.slice(1,value.length);
    } else if(key === 'backspace') {
        return value.slice(0, value.length-1);
    }
}

export const operations = {
    performOperation,
    specialOperands,
    specialOperations
};