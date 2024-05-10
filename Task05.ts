// 3.Calculator project using function:

    //  • Set up two variables containing number values.
    //  • Set up a variable to hold an operator (+ or -).
    //  • Create a function that takes two numbers and an operator as parameters, performs the
    //  corresponding operation, and returns the result.
    //  • Call the function with the variables and operator, and output the result using console.log.
    //  • Update the operator value and call the function again with the updated arguments.

    let num1:number = 12;
    let num2:number = 30;
    let Operator:string = "+";
    function calculator(x:number,y:number,operator:string){
        if(operator == "+"){
            return x + y;
        }else {
            return x - y;
        }
    }
    console.log(calculator(num1,num1,Operator));
    Operator = "-"
    console.log(calculator(15,2,Operator));
    
    