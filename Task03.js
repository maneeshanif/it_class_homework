// 3.Friend checker game:
//    • Prompt the user to enter a name.
//    • Use a switch statement to check if the entered name is a known friend.
//    • Output a confirmation message if the name is known, otherwise output a default
//    response.
import inquirer from "inquirer";
console.log("\t\t\t\t Friend-Checker-Game\n\n\n\n");
let myFriend = ["ahmed", "habib", "ashar", "uzair", "hamza"];
let userName = await inquirer.prompt({
    name: "username",
    type: "input",
    message: "Enter your name in lower case",
});
switch (userName.username) {
    case myFriend[0]:
        console.log("You are my Friend bro");
        break;
    case myFriend[1]:
        console.log("You are my Friend bro");
        break;
    case myFriend[2]:
        console.log("You are my Friend bro");
        break;
    case myFriend[3]:
        console.log("You are my Friend bro");
        break;
    case myFriend[4]:
        console.log("You are my Friend bro");
        break;
    default:
        console.log("Sorry ): to say but you are not my friend");
        break;
}
