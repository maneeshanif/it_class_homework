// 4.Functions:
//• Set up two different variables with different values.
//• Call a function with these variables as arguments and output the result using console.log.
//• Create a second call to the function with two more numbers as arguments
var myFvrtSubject = "Computer_Science";
var day = "friday";
function myPersonalOpinion(a = myFvrtSubject, b = day) {
    let c = console.log(`My favourite Subject is ${a} and i love to read on ${b}`);
    return c;
}
myPersonalOpinion();
myPersonalOpinion(1, 2);
export {};
