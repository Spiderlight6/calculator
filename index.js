
let firstNumber;
let theOperator;
let secondNumber;

const display = document.querySelector("#display");
let showResult = "";

function showDisplay(v){
    showResult += v;
    if(showResult.length > 11){
        showResult = showResult.substring(0,11);
    }
    display.textContent = showResult;
}

const adding = function(x, y){
    return x + y;
}

const subtracting = function(x, y){
    return x - y;
}

const multiplying = function(x, y){
    return x * y;
}

const dividing = function(x, y){
    return Math.ceil(x / y);
}

function operate(theOperator, firstNumber, secondNumber){
    if(theOperator === "+" ){
        return adding(firstNumber, secondNumber);
    }
    else if(theOperator === "-"){
        return subtracting(firstNumber, secondNumber);
    }
    else if(theOperator === "*"){
        return multiplying(firstNumber, secondNumber);
    }
    else if(theOperator === "/"){
        return dividing(firstNumber, secondNumber);
    }
    else{
        return "hello";
    }
}

