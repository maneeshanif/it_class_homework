// 3.Friend checker game:
//    • Prompt the user to enter a name.
//    • Use a switch statement to check if the entered name is a known friend.
//    • Output a confirmation message if the name is known, otherwise output a default
//    response.
import inquirer from "inquirer";
let myFriend: string[] = ["Ahmed","Habib","Ashar","Uzair","Hamza"];
let userName = await inquirer.prompt({
    name : "username",
    type : "string"

})
