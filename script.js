const keys = document.querySelector('.keys')
let previousOperand = document.getElementById('previous-operand');
let prevNum;
let currentOperand = document.getElementById('current-operand')
let operator ;

//can use keyboard
document.addEventListener('keydown', key => {
    //0-9
    if(0 <= key.key && key.key <= 9){
        appendNumbers(key.key);
    }
    //+, -, *, /
    else if(key.key == '+' || key.key == '-' || key.key == '*' || key.key == '/'){
        handleOperator(key.key);
    }
    else if(key.key == 'ArrowUp'){
        handleOperator('^')
    }
    //enter or return
    else if( key.key == 'Enter') {
        onEnter();
    }
    //backspace
    else if(key.key == 'Backspace') clear();
    /*
    switch(key.key){
    case '+':
        handleOperator('+');
        break;
    case '-':
        handleOperator('-')
    }
    */
});

keys.addEventListener('click', key => {
    element = key.target;
    if(element.matches('button')){
        //if clear, then clear text
        if(element.value == "clear") clear();        
        //if equal, calculate
        else if(element.value == "="){
            onEnter();
        } 
        //if operator, set operator, appendOperator, move to previous operator
        else if(element.value == '+' || element.value == '-' || element.value == '*' || 
           element.value == '/' || element.value == '^') 
                handleOperator(element.value);

        //otherwise just append the numbers
        else appendNumbers(element.value)
    }
})

function isReady(){
    //returns true if prevtext is not empty, currentOperand is not empty, and operator is not empty
    return previousOperand.innerText != '' && currentOperand.innerText != '' && operator != '';
}

function handleOperator(op) {
    if(currentOperand.innerText){
        operator = op;
        if(isReady()){
            let num = calculate(prevNum, parseFloat(currentOperand.innerText), operator);
            currentOperand.innerHTML = num
        }
        prevNum = parseFloat(currentOperand.innerText);
        appendNumbers(op);
        previousOperand.innerText = currentOperand.innerText;
        currentOperand.innerText = '';
    }
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
            console.log(`Error choosing operator: ${operator} ..`);
            break;
    }
}

function onEnter(){
    if(isReady()){
        let num = calculate(prevNum, parseFloat(currentOperand.innerText), operator);
        clear();
        currentOperand.innerText = num;
    }
}
