import inquirer from "inquirer";
// import  

let num1 = await inquirer.prompt( [
    {
        name: "number1",
        type: Number,
        message: "Enter First Number:"
    }
] );
let num2 = await inquirer.prompt( [
    {
        name: "number2",
        type: "number",
        message: "Enter Second Number:"
    }
] );
let operator = await inquirer.prompt( [
    {
        name: "operators",
        type: "list",
        choices: ["Add", "Subtract", "Multiply", "Divide", "Fateh"],

        message: "Select operation:"
    }
] );

console.log(operator);

switch (operator.operators) {
    case "Add":
        console.log(num1.number1 + num2.number2);
        break; 
    case "Subtract":
        console.log(num1.number1 - num2.number2);
        break; 
    case "Multiply":
        console.log(num1.number1 * num2.number2);
        break; 
    case "Divide":
        console.log(num1.number1 / num2.number2);
        break; 
    default:
        console.log("Error!"); 
}