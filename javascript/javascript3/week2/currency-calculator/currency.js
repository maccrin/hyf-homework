const BASE_URL = 'https://v6.exchangerate-api.com/v6/API_KEY/pair/';
const fromCurr = document.getElementById('from');
const toCurr = document.getElementById('to');
const rate = document.getElementById('rate');
const button = document.getElementById('getcurrency');
const amount = document.getElementById('amount');
const API_KEY = APIKEY;
const coneversionResult = document.getElementById("output");
const createOption = (currencyName) => {
    const option = document.createElement("option");
    option.value = currencyName;
    option.innerHTML = currencyName;
    return option;
}
const convertionCurrency = async (searchOptions) => {
    const updatedUrl = BASE_URL.replace('API_KEY', APIKEY).concat(searchOptions);
    try {
        const res = await fetch(updatedUrl);
        if (res.result === 'success') {
            return `something went wrong`
        }
        const data = await res.json();
        return data;
    }

    catch (e) {
        return e.message;
    }
}
//Event Handler for conversion of given Amount
getCurrency = async () => {
    if (amount.value === '') {
        alert(`amount is empty`)
    }
    else {
        const fromValue = from.value;
        const toValue = to.value;
        const amountValue = amount.value;
        const search = `${fromValue}/${toValue}/${amountValue}`;
        const convertion = await convertionCurrency(search);
        coneversionResult.innerHTML = `Conversion rate is:${convertion.conversion_rate
            } and Conversion result is:${convertion.conversion_result}`;
        amount.value = ''
    }
}
//Both base and target currency changed to get the currency rate 
const baseTargetChanged = async () => {
    coneversionResult.innerHTML = '';
    const newBase = from.value;
    const newTarget = to.value;
    const search = `${newBase}/${newTarget}`
    const updatedUrl = BASE_URL.replace('API_KEY', APIKEY).concat(search);
    const response = await fetch(updatedUrl);

    try {
        if (response.status !== 200) {
            throw new Error`something went wrong`
        }
        const data = await response.json();
        rate.innerHTML = '';
        rate.appendChild(createOption(data.conversion_rate.toFixed(3)));

    }
    catch (error) {
        alert(error.message);
    }
}
toCurr.addEventListener('change', baseTargetChanged);
fromCurr.addEventListener('change', baseTargetChanged);
window.onload = async () => {
    const response = await fetch('https://open.er-api.com/v6/latest/EUR');
    try {
        if (response.status !== 200) {
            throw new Error`something went wrong`
        }
        const data = await response.json();
        const arrOfCurrency = Array.from(Object.keys(data.rates));
        arrOfCurrency.forEach(eachKey => fromCurr.appendChild(createOption(eachKey)));
        arrOfCurrency.forEach(eachKey => {
            if (eachKey !== 'DKK')
                toCurr.appendChild(createOption(eachKey));
        })
        const arrOfCurrencyRate = Array.from(Object.values(data.rates));
        arrOfCurrencyRate.forEach(eachKey => {
            if (eachKey !== 'DKK')
                rate.appendChild(createOption(eachKey));
        })
    }
    catch (error) {
        console.log(error.message);
    }
}

button.addEventListener('click', getCurrency);