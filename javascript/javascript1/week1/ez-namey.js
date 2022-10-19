let firstWords = [
    "Easy",
    "Awesome",
    "Nice",
    "FirstAttempt",
    "Hacking",
    "Code-For-Coders",
    "Newtech",
    "Motivation",
    "SystemLevel",
    "MachineLevel"
];

let secondWords = [
    "MainframeEasy",
    "MainframeAwesome",
    "MainframeNice",
    "MainframeFirstAttempt",
    "MainframeHacking",
    "MainframeCode-For-Coders",
    "MainframeNewtech",
    "MainframeMotivation",
    "MainframeSystemLevel",
    "MainframeMachineLevel"
];
let ranDomArray = [];
let numOfStartName = prompt("How many  possible start-up names you want to generate");
for (i = 0; i < numOfStartName; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    ranDomArray.push(randomNumber);
}
console.log("Generated random numbers are  " + ranDomArray);
let sortRanDomArray = ranDomArray.sort();
console.log("Here is the random numbers after sorting");
console.log(sortRanDomArray);
let n = sortRanDomArray.length;
for (i = 0; i < n; i++) {
    let counter = 0;
    for (j = i + 1; j < n - 1; j++) {
        if (sortRanDomArray[i] === sortRanDomArray[j]) {
            counter++;
        }
    }
    sortRanDomArray.splice(i + 1, counter);
}
console.log("Random numbers after removing duplicate elements");
console.log(sortRanDomArray);
console.log("Possible start up name after removing the duplicates ones  could be ");
for (i = 0; i < sortRanDomArray.length; i++) {
    console.log(firstWords[sortRanDomArray[i]] + "-" +
        secondWords[sortRanDomArray[i]]);
}



