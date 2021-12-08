const add = function (...num) {
    let result = num.reduce((firstNum, secondNum) => firstNum + secondNum);
    return result;
  };
  
  const subtract = function (...num) {
    let result = num.reduce((firstNum, secondNum) => firstNum - secondNum);
    return parseInt(result);
  };
  
  const sum = function (num) {
    let result = num.reduce((firstNum, secondNum) => firstNum + secondNum, 0);
    return parseInt(result);
  };
  
  const multiply = function (num) {
    let result = num.reduce((firstNum, secondNum) => firstNum * secondNum);
    return parseInt(result);
  };
  
  const power = function (...num) {
    let result = num.reduce((firstNum, secondNum) => Math.pow(firstNum, secondNum));
    return parseInt(result);
  };
  
  const factorial = function (num) {
    let result = num;
  
    if (num === 0 || num === 1) {
      return 1;
    } else {
      while (num > 1) {
        num--;
        result = result * num
      }
    }
    return result;
  };

  const useOperator = function (operator, ...num) {
      if (operator === '+') {
        return add(num);
      } else if (operator === '-') {
        return subtract(num);
      } else if (operator === '*') {
        return multiply(num);
      } else if (operator === '/') {
        return 
      } else if (operator === '^') {
        return power(num);
      } else if (operator === '!') {
          return factorial(num);
      } else {
        return 'Unknown operator.';
      }
  }