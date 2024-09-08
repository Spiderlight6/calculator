let firstNumber = null;
let secondNumber = null;
let operatorClicked = null;
let theOperator = null;
let showResult = "";

// functions to do the simple mathematics operations
const adding = function (x, y) {
    return x + y;
}

const subtracting = function (x, y) {
    return x - y;
}

const multiplying = function (x, y) {
    return x * y;
}

const dividing = function (x, y) {
    if (y === 0) {
        return "Nice try";
    }
    return (x / y).toFixed(3);
}

// function to operate the given numbers and operator
function operate(theOperator, firstNumber, secondNumber) {
    if (theOperator === "+") {
        return adding(firstNumber, secondNumber);
    } else if (theOperator === "-") {
        return subtracting(firstNumber, secondNumber);
    } else if (theOperator === "x") {
        return multiplying(firstNumber, secondNumber);
    } else if (theOperator === "/") {
        return dividing(firstNumber, secondNumber);
    } else {
        return "Haha nice try";
    }
}

// function to display the clicked numbers
const display = document.querySelector("#display");

function showDisplay(v) {
    showResult += v;
    if (showResult.length > 11) {
        showResult = showResult.substring(0, 11);
    }
    display.textContent = showResult;

    // Store the second number when operator has been clicked
    if (theOperator) {
        secondNumber = Number(showResult);
    }
}

// create a function to store the operator
function checkOperator(operator) {
    operatorClicked = operator;
}

// Select all elements with the class "operations"
const theOperations = document.querySelectorAll(".operations");

// Loop through each operation button and add an event listener
theOperations.forEach(operation => {
    operation.addEventListener("mouseup", () => {
        // If an operator is already clicked and both numbers are present, evaluate the result
        if (theOperator && secondNumber !== null) {
            firstNumber = operate(theOperator, firstNumber, secondNumber);
            display.textContent = firstNumber;
            showResult = ""; // Reset showResult to capture next number
            secondNumber = null; // Reset secondNumber for the next input
        } else {
            firstNumber = Number(showResult); // If no operation was done yet, store the first number
        }

        // Store the operator for the next operation
        theOperator = operation.value;
        showResult = ``; // Clear the display for the next number input
        display.textContent = showResult;
    });
});

// Add an event listener to check when "=" is clicked
const equalSign = document.querySelector("#equalSign");

equalSign.addEventListener("mouseup", () => {
    if (theOperator && secondNumber !== null) {
        showResult = operate(theOperator, firstNumber, secondNumber);
        display.textContent = showResult;
        firstNumber = Number(showResult); // Store the result as the first number
        secondNumber = null; // Reset second number
        theOperator = null; // Reset operator
    }
});

// Add an event listener to the clear button
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    firstNumber = null;
    secondNumber = null;
    theOperator = null;
    showResult = "";
    display.textContent = showResult;
});



