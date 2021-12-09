const add = function (...num) {
  let result = num.reduce((firstNum, secondNum) => firstNum + secondNum);
  return parseFloat(result);
};
console.log(add(5, 2));

const subtract = function (...num) {
  let result = num.reduce((firstNum, secondNum) => firstNum - secondNum);
  return parseFloat(result);
};
console.log(subtract(5, 2));

const multiply = function (...num) {
  let result = num.reduce((firstNum, secondNum) => firstNum * secondNum);
  return parseFloat(result);
};
console.log(multiply(5, 2));

const divide = function (...num) {
  let result = num.reduce((firstNum, secondNum) => firstNum / secondNum);
  return parseFloat(result);
}
console.log(divide(5, 2));

const byHundred = function (num) {

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
console.log(useOperator(5, '+', 2));
console.log(useOperator(5, '-', 2));
console.log(useOperator(5, '*', 2));
console.log(useOperator(5, '/', 2));
// console.log(useOperator(5));
console.log(useOperator(5, '$', 2));