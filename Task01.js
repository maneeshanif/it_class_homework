// 1. Miles-to-Kilometers Converter (Operators):
/*• Create a variable named miles and assign a numeric value representing distance in miles.
    • Calculate the equivalent distance in kilometers using the conversion factor (1 mile =
    1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
    • Store the converted distance in kilometers in a variable named kilometers.
    • Use console.log to print a message in the following format:
    The distance of 130 kms is equal to 209.2142 miles*/
import inquirer from "inquirer";
let miles = 130;
let kilometers = miles * 1.60934;
console.log(`The distance of ${miles} in miles is equal to ${kilometers} kms`);
// This is an upgraded version of above code in this code I use inquirer to take input from user and gave the user 
// its desire answer
let Miles1 = await inquirer.prompt({
    name: "miles",
    type: "number",
    message: "\n\nEnter the distance in miles",
});
let kilometers1 = Miles1.miles * 1.60934;
console.log(`the distance of ${Miles1.miles} in miles is equal to ${kilometers1} kms`);
