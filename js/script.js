let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let currencyEUR = 4.72;
let currencyUSD = 4.41;
let currencyGBP = 5.35;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;
    
    switch (currency) {
        case "EUR":
            result = amount/currencyEUR
            break;
        case "USD":
            result = amount/currencyUSD
            break;
        case "GBP":
            result = amount/currencyGBP
    }
    resultElement.innerText = result.toFixed(2);
});