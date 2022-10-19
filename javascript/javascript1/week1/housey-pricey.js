let Peter = {
    width: 8,
    depth: 10,
    height: 100,
    gradenSize: 100,
    actualCost: 2500000,

}
Peter.calculatedCost = (8 * 10 * 10 * 2.5 * 1000) + (100 * 300);
console.log("Peter is paying " + Peter.calculatedCost);
if (Peter.actualCost > Peter.calculatedCost) {
    console.log("Peter is paying less than actual cost");
}
else if (Peter.actualCost < Peter.calculatedCost) {
    console.log("Peter is paying more than the actual cost");
}

else {
    console.log("Peter is paying exact amount for his house");
}

let Julia = {
    width: 5,
    depth: 11,
    height: 8,
    gradenSize: 70,
    actualCost: 1000000
}
Julia.calculatedCost = (5 * 11 * 8 * 2.5 * 1000) + (70 * 300);
console.log("Julia is paying " + Julia.calculatedCost);

if (Julia.actualCost > Julia.calculatedCost) {
    console.log("Julia is paying less the actual cost");
}
else if (Julia.actualCost < Julia.calculatedCost) {
    console.log("Julia is paying more than the actual cost");
}

else {
    console.log("Julia is paying exact amount for his house");
}

