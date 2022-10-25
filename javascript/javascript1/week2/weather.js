function clothesToWear(temp) {
    if (temp <= 0) {
        alert("Please wear a  Bomber jacket as snow fall is continuing here in Demark!!");
    }
    else if (temp <= 10) {
        alert("Please wear a proper winter jacket it's too cold here in Demark!!");
    }
    else if (temp > 10 && temp <= 15) {
        alert("Please wear a  Light jacket as its Autumn here in Demark!!");
    }
    else if (temp <= 25 && temp > 15) {
        alert("Please wear a  sweatshirt as its windy  here in Demark!!");
    }
    else
        alert("Oh temerature is rising  lets try some summer cool clothings!");

}

const temperature = prompt("What is todays temperature ?");
clothesToWear(temperature);