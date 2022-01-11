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

const clickReset = resetButton.addEventListener('click', () => {
  displayValue.innerHTML = '0';
  valueOne = null;
  valueTwo = null;
  operator = null;
})

const clickNumber = numButtons.forEach(e => {
  e.addEventListener('click', () => {
    if (displayValue.innerHTML === '0' || displayValue.innerHTML === valueOne) {
      displayValue.innerHTML = '';
    }

    if (displayValue.innerHTML.length < 16) {
      displayValue.innerHTML += e.innerHTML;
    }
  })
})

const clickDecimal = decimalButton.addEventListener('click', () => {
  if (displayValue.innerHTML.indexOf('.') === -1) {
    displayValue.innerHTML += '.';
  }
})

const clickOperator = operatorButtons.forEach(e => {
  e.addEventListener('click', () => {
    valueOne = displayValue.innerHTML;
    operator = e.className;

    console.log(operator);
  })
})

const clickEquals = equalsButton.addEventListener('click', () => {
  valueTwo = displayValue.innerHTML;
  operate(valueOne, valueTwo);
})

const operate = function (valueOne, valueTwo) {
  valueOne = parseFloat(valueOne);
  valueTwo = parseFloat(valueTwo);

  console.log(valueOne);

  if (operator === 'operator divide') {
    result = valueOne / valueTwo;
  } else if (operator === 'operator multiply') {
    result = valueOne * valueTwo;
  } else if (operator === 'operator subtract') {
    result = valueOne - valueTwo;
  } else if (operator === 'operator add') {
    result = valueOne + valueTwo;
  }

  console.log(result);

  displayValue.innerHTML = String(result);
}