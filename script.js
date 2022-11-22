/* Consider converting your ${numbers} variable to an array in order to make 
the logic easier to manage - instead of constantly shifting values between
the variables, reference later portions of the array. 
*/
let num1 = 0;
let num2 = 0;
let answer = 0;
let operator = '';
let oldOp = '';
let btnOrder = [];
let opReg = /[+\-*x/]/
let numReg = /[0-9]/
const expField = document.querySelector('.expression');
const resultField = document.querySelector('.result');
const digitBtn = document.querySelectorAll('.digit');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');

clearBtn.addEventListener('click', clear);
equalsBtn.addEventListener('click', () => {
    answer = operate(operator, parseInt(num1), parseInt(num2));
    expField.textContent = answer;
});

for (i = 0; i < digitBtn.length; i++) {
    digitBtn[i].addEventListener('click', pressDigit);
}

for (i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener('click', pressOperator);
}

function pressDigit() {
    value = this.getAttribute('value');
    if (num2 != 0) {
        num2 += value;
    } else {
        num2 = value;
    }
    expField.textContent = num2;
    btnOrder.push(value);
}

function pressOperator() {
    if (operator) {
        oldOp = operator;
    }
    if (num1) {
        
        answer = operate(operator, parseInt(num1), parseInt(num2));
        expField.textContent = answer;
        num1 = answer;
        num2 = 0;
    } else {
        num1 = num2;
        num2 = 0;
    }
    operator = this.getAttribute('value');
    btnOrder.push(operator);
}

function add(...args) {
    return args[0] + args[1];
}

function subtract(...args) {
    return args[0] - args[1];
}

function multiply(...args) {
    return args[0] * args[1];
}

function divide(...args) {
    return args[0] / args[1]; 
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

function clear() {
    display = '';
    num1 = 0;
    num2 = 0;
    operator = '';
    expField.textContent = '';
    btnOrder = [];
}

function evaluate(form) {
    let func = new Function("return " + form);
    return func();
}

function backspace() {
    let end = btnOrder.pop();

}


/*function processNum() {
    let newStr = btnOrder.join('');
    let opPos = newStr.search(opReg);
    if (opPos === 0) {
        operator = newStr.slice(0,1);
        console.log(operator + '1');
        processNum();
    } else if (num1 === 0) {
        num1 = newStr.slice(0, opPos);
        console.log(num1 + '2');
    } else if (!(num1 === 0) && num2 === 0) {
        num2 = newStr.slice(0,opPos);
        console.log(num2 + '3');
    } else if (!(num1 === 0) && !(num2 === 0)) {
        answer = operate(operator, num1, num2);
        expField.textContent = answer;
        num1 = num2;
        num2 = 0;
        console.log(num1, num2, '3')
    }
    console.log(num1);
}*/