// 3.Calculator project using function:
//  • Set up two variables containing number values.
//  • Set up a variable to hold an operator (+ or -).
//  • Create a function that takes two numbers and an operator as parameters, performs the
//  corresponding operation, and returns the result.
//  • Call the function with the variables and operator, and output the result using console.log.
//  • Update the operator value and call the function again with the updated arguments.
let num1 = 12;
let num2 = 30;
let operator = "+";
function calculator(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
}
console.log(calculator(num1, num1, operator));
operator = "-";
console.log(calculator(10, 2, operator));
export {};
