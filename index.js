
let firstNumber;

let secondNumber;

// functions to do the simple mathematics operations

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


// function to operate the given numbers and operator.

function operate(theOperator, firstNumber, secondNumber){
    if(theOperator === "+" ){
        return adding(firstNumber, secondNumber);
    }
    else if(theOperator === "-"){
        return subtracting(firstNumber, secondNumber);
    }
    else if(theOperator === "x"){
        return multiplying(firstNumber, secondNumber);
    }
    else if(theOperator === "/"){
        return dividing(firstNumber, secondNumber);
    }
    else{
        return "hello";
    }
}

// function to display the clicked numbers

const display = document.querySelector("#display");
let showResult = "";

function showDisplay(v){
    showResult += v;
    if(showResult.length > 11){
        showResult = showResult.substring(0,11);
    }
    display.textContent = showResult;

    // Store the second number when operator has been clicked
    if (theOperator) {
        secondOperationNumber = Number(showResult);  
    }

}



// create a function to store the operator.
let operatorClicked;

function checkOperator(operator){
    operatorClicked = operator;
    
}


let secondOperationNumber 
let theOperator;



// Select all elements with the class "operations"
const theOperations = document.querySelectorAll(".operations");


// Loop through each operation button and add an event listener
theOperations.forEach(operation => {
    operation.addEventListener("mouseup", () => {
       
        // Store the first operation number and operator
        firstOperationNumber = Number(showResult);  
        theOperator = operation.value;
        
        // reset display and detect the second number
        showResult = ``;
        display.textContent = showResult;

        
        
    });
});



// add an event listener to check = is clicked
const equalSign = document.querySelector("#equalSign")

equalSign.addEventListener("mouseup", () =>{
    showResult =  operate(theOperator, firstOperationNumber, secondOperationNumber)
    display.textContent = showResult;
});


// add an event listener to the clear button to
const clear = document.querySelector("#clear");
clear.addEventListener("click", () =>{
    showResult = ""
    display.textContent = showResult;
});

