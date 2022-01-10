const displayValue = document.getElementById('display');

const numInputs = document.querySelectorAll('.num');

const resetButton = document.querySelector('.reset');
const decimalButton = document.querySelector('.decimal');

let valueOne
let valueTwo




let resetDisplayValue = resetButton.addEventListener('click', () => {
  displayValue.innerHTML = '0';
})

numInputs.forEach(input => {
  input.addEventListener('click', () => {
    if (displayValue.innerHTML === '0') {
      displayValue.innerHTML = '';
    }

    if (displayValue.innerHTML.length < 16) {
      displayValue.innerHTML += input.innerHTML;
    }
  })
})

decimalButton.addEventListener('click', () => {
  if (displayValue.innerHTML.indexOf('.') === -1) {
    displayValue.innerHTML += '.';
  }
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