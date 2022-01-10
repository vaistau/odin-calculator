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

const numInputs = document.querySelectorAll('.num');

let displayValue
let valueOne
let valueTwo

let resetDisplayValue = resetButton.addEventListener('click', () => {
  displayValue = document.getElementById('display').innerHTML = '0';
})

numInputs.forEach(input => {
  input.addEventListener('click', () => {
    // function should alter value one OR value two
  })
})

moduloButton.addEventListener('click', byHundred(valueOne));

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
  displayValue = document.getElementById('display').innerHTML = parseFloat(result);
}