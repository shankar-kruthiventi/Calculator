import { evaluate } from 'mathjs';

const performOperation = (value) => {
    let result;
    try {
        result = evaluate(value);
    } catch(err) {
        console.log(err);
        result = 'syntax error';
    } finally {
        return result; 
    }
}

export const operations = {
    performOperation
};