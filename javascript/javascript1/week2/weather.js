function clothesToWear(temp) {
    if (isNaN(temp)) {
        console.log(`Please provide a valid input`);
        return;
    }
    else {
        if (temp <= 0) {
            console.log("Please wear a  Bomber jacket as snow fall is continuing here in Demark!!");
        }
        else if (temp <= 10) {
            console.log("Please wear a proper winter jacket it's too cold here in Demark!!");
        }
        else if (temp > 10 && temp <= 15) {
            console.log("Please wear a  Light jacket as its Autumn here in Demark!!");
        }
        else if (temp <= 25 && temp > 15) {
            console.log("Please wear a  sweatshirt as its windy  here in Demark!!");
        }
        else
            console.log("Oh temerature is rising  lets try some summer cool clothings!");
    }

}

const temperature = prompt("What is todays temperature ?");
clothesToWear(temperature);