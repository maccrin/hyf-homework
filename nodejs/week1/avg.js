(function () {
    try {
        if (process.argv.slice(2).length) {
            const numericInput = process.argv.slice(2).filter(x => (!isNaN(x))).length;
            if (numericInput) {
                const sum = process.argv.slice(2).filter(x => (!isNaN(x))).map(x => parseFloat(x)).reduce((a, b) => a + b)
                const avg = parseFloat(sum / numericInput);
                console.log(`average of numeric elements are ${avg}`)
            }
            else {
                throw new Error('provide some numeric values to calculate avg')
            }
        }
        else
            throw new Error(`Please Provide Arguments`)
    }
    catch (e) {
        console.log(e.message)
        return;
    }
})();
