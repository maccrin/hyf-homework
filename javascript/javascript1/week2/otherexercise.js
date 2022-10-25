// Exercise-Lola
const arr = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
let flag = true;
let i = 0;
while (flag) {
    if (arr[i] === 'Lola') {
        flag = false;
        console.log(`The respective index value is ${i}`);
    }
    i++;
}

// Write a function min(a, b) which returns the least of two numbers a and b.
function minNumber(num1, num2) {
    const result = (num1 > num2) ? num2 : num1;
    return result;
}

const outPut = minNumber(3, -3);
console.log("The min number is " + outPut);
const outPut1 = minNumber(5, 56);
console.log("The min number is " + outPut1);
const outPut2 = minNumber(0, -56);
console.log("The min number is " + outPut2);

// Create a function called getCircleArea.It should have the radius of the circle as
// parameter and return
// the circle area.What happens if we don't return anything in the function?

function getCircleArea(radius) {
    const area = Math.PI * Math.pow(2, 2);
    return area;
}

const circleArea = getCircleArea(9).toFixed(2);
console.log(`The area of the circle is ${circleArea} `);

// If we don't return anything the js function will return undefined .

// Create a function called celciusToFahreneit it should have a parameter called celcius.
// It should return the temperature in fahrenheit.
function celciusToFarenheit(celcius) {
    const temp = (10.2 * 9 / 5) + 32;
    return temp;
}

const outputTemp = gelciusToFarenheit(10.2);
console.log(`The temperature in in fahrenheit is ${outputTemp}`);
