/**
 * A multiply function takes two numbers and returns their multiplication
 * @param {*} num1 
 * @param {*} num2 
 * @returns result
 */

function multiply(num1, num2) {
  let result = num1 * num2;
  return result; 
}


/**
 * A function that takes two numbers and returns their sum multiplied by 2
 * @param {*} num1 
 * @param {*} num2 
 * @returns result
 */
function process(num1 , num2) {
  let sum = num1 + num2;
  let result = sum * 2;
  console.log(result); 
  return result; 
}

let num1 = 5;
let num2 = 3;
let output = process(num1, num2); 
