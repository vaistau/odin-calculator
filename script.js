const resetButton = document.querySelector('.reset');
const signButton = document.querySelector('.sign');
const moduloButton = document.querySelector('.modulo');
const divideButton = document.querySelector('.divide');
const multiplyButton = document.querySelector('.multiply');
const subtractButton = document.querySelector('.subtract');
const addButton = document.querySelector('.add');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');
const numButton = document.querySelector('.num');

let displayValue

let resetDisplayValue = resetButton.addEventListener('click', () => {
  displayValue = document.getElementById('display').innerHTML = '0';
})

// FUNCTION DECLARATIONS:

const add = function (...num) {
  let result = num.reduce((firstNum, secondNum) => firstNum + secondNum);
  return parseFloat(result);
};

const subtract = function (...num) {
  let result = num.reduce((firstNum, secondNum) => firstNum - secondNum);
  return parseFloat(result);
};

const multiply = function (...num) {
  let result = num.reduce((firstNum, secondNum) => firstNum * secondNum);
  return parseFloat(result);
};

const divide = function (...num) {
  let result = num.reduce((firstNum, secondNum) => firstNum / secondNum);
  return parseFloat(result);
}

const byHundred = function (num) {
  let result = num / 100;
  return parseFloat(result);
}

const useOperator = function (firstNum, operator, secondNum) {
  if (operator === '+') {
    return add(firstNum, secondNum);
  } else if (operator === '-') {
    return subtract(firstNum, secondNum);
  } else if (operator === '*') {
    return multiply(firstNum, secondNum);
  } else if (operator === '/') {
    return divide(firstNum, secondNum)
  } else if (operator === '%') {
    return byHundred(firstNum)
  } else {
    return 'Unknown operator.';
  }
}

