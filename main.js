#!/urs/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//initialize user bal n pin code
let myBalance = 5000; //$Doller
const myPinCode = 1122;
//print message
console.log(chalk.blue('\n\t\t"Welcome To ATM-Machine"\n'));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellowBright("Enter Your Pin Code "),
        type: "number",
    },
]);
if (pinAnswer.pin === myPinCode) {
    console.log(chalk.greenBright(`\nCorrect pin code,  Login Successfully!\n`));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option: ",
            type: "list",
            choices: ["Withdraw Amount", "Check Blance", "Fast Cash"],
        },
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amoutAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount To Withdraw: ",
                type: "number",
            },
        ]);
        if (amoutAns.amount > myBalance) {
            console.log(chalk.bgRedBright("\nINSUFFICIENT BALANCE!!!"));
        }
        else {
            myBalance -= amoutAns.amount;
            console.log(chalk.greenBright(`\n"${amoutAns.amount}" Wthdraw Successfully!.. `));
            console.log(`\nYour Remaining Balance Is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Blance") {
        console.log(`\nYour Current Balance is: ${myBalance}`);
    }
    if (operationAns.operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select Amount: ",
                choices: [1000, 2000, 5000, 10000, 20000],
            },
        ]);
        if (fastCashAns.fastCash > myBalance) {
            console.log(chalk.redBright(`\n INSUFFICIENT BALANCE!!!`));
        }
        else {
            myBalance -= fastCashAns.fastCash;
            console.log(chalk.greenBright(`\n"${fastCashAns.fastCash}" Fast Cash Successfully!.. \n`));
            console.log(`\Your Remaining Balanec Is: ${myBalance}`);
        }
    }
}
else {
    console.log(chalk.redBright(`\n\t\t!Incorrect pin Numer, Try Again.`));
}
