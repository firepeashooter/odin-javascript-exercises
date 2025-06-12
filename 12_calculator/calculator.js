const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {

  total = 0

  if (arr.length == 0){
    return 0;
  } else{

    for (let i = 0; i < arr.length; i++){
      total += arr[i];
    }
  }

  return total;
	
};

const multiply = function(arr) {
  
  total = 1;
  
  for (let i = 0; i < arr.length; i++){
    total *= arr[i];
    console.log(total);
  }

  return total;
};

const power = function(num1, num2) {

  return Math.pow(num1, num2);
	
};

const factorial = function(num) {

  total = 1;

  if (num == 0){
    return 1;
  } else{

    for (let i = num; i > 0; i--){
      total *= i;
    }

  }

  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
