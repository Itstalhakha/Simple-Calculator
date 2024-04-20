#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        question: "Enter your number", type: "number", name: "Firstnumber"
    },
    {
        question: "Enter your second number", type: "number", name: "Secondnumber"
    },
    {
        question: "Enter your operation", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", 'Division'],
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else {
    console.log("Enter the valid operation");
}
