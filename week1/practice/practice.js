const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Welcome message
    console.log("Welcome to Luke's Calulator!");
    while (true) {
        // List options
        console.log("[1] Add numbers");
        console.log("[2] Subtract numbers");
        console.log("[3] Multiply numbers");
        console.log("[4] Exit");
        // Ask user to enter an option
        let userInput = await askQuestion("Select an option from above: ");
        console.log();
        // Choose an option based on user input
        if (userInput == "1") {
            console.log("You have selected the Add numbers function");
            // Add numbers logic
            let userInput1 = await askQuestion("Enter the first number: ");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the second number: ");
            let num2 = parseInt(userInput2);
            console.log(`${num1} plus ${num2} is ${num1 + num2}`);
        } else if (userInput == "2") {
            console.log("You have selected the Subtract numbers function");
            // Subtract numbers logic
            let userInput1 = await askQuestion("Enter the first number: ");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the second number: ");
            let num2 = parseInt(userInput2);
            console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);
        } else if (userInput == "3") {
            console.log("You have selected the Multiply numbers function");
            // Multiply numbers logic
            let userInput1 = await askQuestion("Enter the first number: ");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the second number: ");
            let num2 = parseInt(userInput2);
            console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
        } else if (userInput == "4") {
            break;
        } else {
            // Error: couldn't read input
            console.log("Error: please enter a number 1 - 4");
        }
        console.log();
    }
    // Goodbye message
    console.log("Thank you for using Luke's Calulator!");
}

// alt + shift + f

Program().then(() => {
    process.exit(0);
});