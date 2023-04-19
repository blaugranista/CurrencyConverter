{
    const calculateResult = (amount, currency) => {

        const currencyEUR = 4.72;
        const currencyUSD = 4.41;
        const currencyGBP = 5.35;

        switch (currency) {
            case "EUR":
                return amount / currencyEUR

            case "USD":
                return amount / currencyUSD

            case "GBP":
                return amount / currencyGBP
        }
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = +currencyElement.value;
        const amount = amountElement.value;

        const result = calculateResult(amountElement.value, currencyElement.value);

        updateResultText(result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();

}