const keys = document.querySelector('.keys')
let previousOperand = document.getElementById('previous-operand');
let prevNum;
let currentOperand = document.getElementById('current-operand')
let operator;

keys.addEventListener('click', key => {
    element = key.target;
    if(element.matches('button')){
        //if clear, then clear text
        if(element.value == "clear") clear();        
        //if equal, calculate
        else if(element.value == "=" && isReady()){
            let num = calculate(prevNum, parseFloat(currentOperand.innerText), operator);
            clear();
            currentOperand.innerText = num;
        } 
        //if operator, set operator, appendOperator, move to previous operator
        else if(element.value == '+' || element.value == '-' || element.value == '*' || 
           element.value == '/' || element.value == '^') 
                handleOperator(element.value);

        //otherwise just append the numbers
        else if(element.value != "=")appendNumbers(element.value)
    }
})

function isReady(){
    return previousOperand.innerText == '' || currentOperand != '' || operator != '';
}

function handleOperator(op) {

        operator = op;
        prevNum = parseFloat(currentOperand.innerText);
        appendNumbers(op);
        previousOperand.innerText = currentOperand.innerText;
        currentOperand.innerText = '';
}

function appendNumbers(digit){
    currentOperand.innerText += digit;
}

function clear() {
    operator = '';
    previousOperand.innerText = '';
    currentOperand.innerText = '';
}

function calculate(operand1, operand2, operator) {
    switch(operator){
        case '+':
            return operand1 + operand2;
            break;
        case '-':
            return operand1 + operand2;
            break;
        case '*':
            return operand1 + operand2;
            break;
        case '/':
            return operand1 + operand2;
            break;
        case '^':
            return Math.pow(operand1, operand2);
            break;
        default:
            console.log(`Error choosing operator: ${operator}`);
            break;
    }
}