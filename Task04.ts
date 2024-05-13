// 4.Functions:
    //• Set up two different variables with different values.
    //• Call a function with these variables as arguments and output the result using console.log.
    //• Create a second call to the function with two more numbers as arguments

    var myFvrtSubject:string = "Computer_Science";
    var day:string = "friday";
    function myPersonalOpinion(a:string |number = myFvrtSubject,b:string| number = day){
     let c =console.log(`My favourite Subject is ${a} and i love to read on ${b}`);
     return c;
    }
    myPersonalOpinion();
    myPersonalOpinion("coding","sunday")
