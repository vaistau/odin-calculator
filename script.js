const displayValue = document.getElementById('display');

const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');

const resetButton = document.querySelector('.reset');
const decimalButton = document.querySelector('.decimal');

let valueOne
let valueTwo
let operator




let resetAll = resetButton.addEventListener('click', () => {
  displayValue.innerHTML = '0';
  valueOne = null;
  valueTwo = null;
  operator = null;
})

numButtons.forEach(e => {
  e.addEventListener('click', () => {
    if (displayValue.innerHTML === '0' || displayValue.innerHTML === valueOne) {
      displayValue.innerHTML = '';
    }

    if (displayValue.innerHTML.length < 16) {
      displayValue.innerHTML += e.innerHTML;
    }
  })
})

decimalButton.addEventListener('click', () => {
  if (displayValue.innerHTML.indexOf('.') === -1) {
    displayValue.innerHTML += '.';
  }
})

operatorButtons.forEach(e => {
  e.addEventListener('click', () => {
    valueOne = displayValue.innerHTML;
    operator = e.innerHTML;
  })
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
  displayValue = displayValue.innerHTML = parseFloat(result);
}