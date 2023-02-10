const read = (filePath) => {
    const fs = require('fs');
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}
module.exports = read;