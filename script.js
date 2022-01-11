const displayValue = document.getElementById('display');

const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');

const resetButton = document.querySelector('.reset');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');

let valueOne
let valueTwo
let operator
let result



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

equalsButton.addEventListener('click', () => {
  valueTwo = displayValue.innerHTML;
  operate(Number(valueOne), Number(valueTwo));
})



const operate = function (valueOne, valueTwo) {
  if (operator === '&divide;') {
    result = valueOne / valueTwo;
  } else if (operator === '&times;') {
    result = valueOne * valueTwo;
  } else if (operator === '&minus;') {
    result = valueOne - valueTwo;
  } else if (operator === '&plus;') {
    result = valueOne + valueTwo;
  }

  displayValue.innerHTML = toString(result);
}