const readline = require('readline');
const axios = require('axios');
const path = require("path");
const fs = require('fs')

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
    // Your Code Here...

    // type is either general or programming
    let shouldLoop = true;
    while(shouldLoop){
    jokeTypeInput = await askQuestion("What type of Joke would you like [1] General [2] Programming [3] Knock-Knock (max 5 jokes): ")
    if (jokeTypeInput == "1") {
        jokeType = "general";
        shouldLoop = false;
    } else if (jokeTypeInput == "2") {
        jokeType = "programming";
        shouldLoop = false;
    } else if (jokeTypeInput == "3") {
        jokeType = "knock-knock";
        shouldLoop = false;
    } else {
        console.log();
        console.log("** User Input Invalid. Please enter a number between 1 and 3 **");
        console.log();
    }
}

    jokeAmountInput = await askQuestion("How many jokes would you like?: ")


    let website = await axios.get(`https://official-joke-api.appspot.com/jokes/${jokeType}/ten`)

    let rawJoke = [];
    rawJoke = website.data;
    let jokeAmountNumber = parseInt(jokeAmountInput);

    if(jokeTypeInput == "3" && jokeAmountInput > 5){
        console.log();
        console.log("** We can only create a maxium of 5 Knock-Knock Jokes, and here they are: **")
        jokeAmountNumber = 5
    }

    for (let i = 0; i < jokeAmountNumber; i++) {
        console.log();
        console.log(`Joke Number ${i + 1}`);
        console.log(rawJoke[i].setup);
        console.log(rawJoke[i].punchline);
        console.log();
    }
}

Program().then(() => {
    process.exit(0);
});