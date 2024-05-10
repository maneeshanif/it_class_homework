// 2.Evaluating a number game:
/*
    • Prompt the user to enter a number.
    • Compare the entered number with a dynamic number value.
    • Output the result indicating whether the entered number is greater than, equal to, or less
    than the dynamic number value.

*/
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10);
let userNumber = await inquirer.prompt({
  name: "userno",
  type: "number",
  message: "Enter th number between 1 to 10 ",
});
if (userNumber.userno > randomNumber) {
  console.log(
    `you entered ${userNumber.userno} number which is Higher than the ${randomNumber} random Number `
  );
  console.log("Plese try Again");
} else if (userNumber.userno == randomNumber) {
  console.log("Congratulation !! You Gussed the Right Number.");
  console.log(
    `You enter ${userNumber.userno} number which is equall to random no ${randomNumber}`
  );
} else {
  console.log(
    ` you write ${userNumber.userno} number which is smaller than the  ${randomNumber} random number `
  );
  console.log("try again belive me you can do it");
}
