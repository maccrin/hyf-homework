const myCandyBasket = [{ candyType: "sweet", pricePerGram: 0.5 }, { candyType: "toffee", pricePerGram: 1.1 },
{ candyType: "Chocolate", pricePerGram: 0.7 }, { candyType: "chewingGum", pricePerGram: 0.03 }];
const boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
let flag = true;
console.log(`Total money in hand is ${amountToSpend}`);
console.log(`My candy basket with there type and respective price  pergram is`);
console.log(myCandyBasket);

function addCandy(name, weight) {
    const totalPrice = getCandyPrice(name, weight);
    console.log(`The total price of ${weight}gram ${name} is ${totalPrice}`);
    if (amountToSpend > totalPrice) {
        boughtCandyPrices.push({ candyType: name, CandyWeight: weight, CandyTotalPrice: totalPrice });
        amountToSpend -= totalPrice;
        console.log(`You have some more to spend for candies.`);
        return amountToSpend;
    }
    else {
        flag = false;
        console.log(`You have no more money for candy`);
    }
}


function getCandyPrice(name, weight) {
    const candyName = myCandyBasket.find(candy => candy.candyType.toLowerCase() === name.toLowerCase());
    return candyName.pricePerGram * weight;
}

while (flag) {
    flag == true ? addCandy("sweet", 10.6) : 0;
    flag == true ? addCandy("chocolate", 20.5) : 0;
    flag == true ? addCandy("chewingGum", 9.4) : 0;
    flag == true ? addCandy("toffee", 9.5) : 0;


}
const totalSpent = boughtCandyPrices.reduce((accumulatore, currentvalue) =>
    accumulatore + currentvalue.CandyTotalPrice, 0);

console.log(`My Updated Candy basket with their respective total price is `)
console.log(boughtCandyPrices);
console.log(`Total  amount for all Candies which are in basket  is ${totalSpent}`);


