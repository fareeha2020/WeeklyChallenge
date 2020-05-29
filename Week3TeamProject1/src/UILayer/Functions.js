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

function listCountryCodesOnly(countries) {
    return countries.map(countryObject => countryObject.code)
}
//when a country code is selected, display the corresponding country name
function countryName(userInput, countries) {
    let newCountries = countries.find(countryObject => userInput.toUpperCase() == countryObject.code)
    return newCountries.countryName;
}



function doesCurrencyExist(Input,country) {
    let currency =listCountryCodesOnly(country).includes(Input);
    if (currency) {
        return true;
    } else {
        return false;
    }
}

function calculateRate(detailedResponse, country, amount) {
    if(!isNaN(amount)){
       for (key in detailedResponse) {
        if (detailedResponse.hasOwnProperty(country)) {
            let value = detailedResponse[country];
            myRate = value;
        }
    }
    return myRate * amount;
}
return false;
}
module.exports={
    listCountryCodesOnly,
    countryName,
    calculateRate,
    doesCurrencyExist,
    askQuestion
}