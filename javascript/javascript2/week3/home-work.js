// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
// Create a function that takes 2 parameters: delay and stringToLog.Calling this function
//     should log out the stringToLog after delay seconds.C
// all the function you have created with some different arguments.
// Create a button in html.When clicking this button, use the function you
// created in the previous task to log out the text: Called after
//  5 seconds 5 seconds after the button is clicked.
function delayMsg(delay, stringToLog) {
    setTimeout(() => {
        console.log(`Called after 5 seconds`);
    }, delay * 1000)
}
const printMSg = delayMsg;
const button1 = document.getElementById("1st");
button1.addEventListener('click', callBack => {
    printMSg(5, "Called after 5 seconds");
});

// Create two functions and assign them to two different variables.One function logs out Earth,
//  the other function logs out Saturn.Now create a new third function that has one parameter:
//   planetLogFunction.The only thing the third function should do is call the provided parameter
//   function.
// Try call the third function once with the Earth function and once with the Saturn function.
const elogger = () => console.log(`earth`);
const slogger = () => console.log(`saturn`);
elogger();
slogger();

const planetLogFunction = (funelogger) => funelogger();
planetLogFunction(elogger);
planetLogFunction(slogger);

// Create a button with the text called "Log location".When this button is clicked the
//  location(latitude, longitude) 
// of the user should be logged out using this browser api
const lat = document.getElementById('lat');
const long = document.getElementById('long');
const locstatus = document.getElementById('location-status');

const locationButton = document.getElementById('location');
function showPosition(position) {
    long.innerHTML = "Latitude: " + position.coords.latitude;
    lat.innerHTML = "Longitude: " + position.coords.longitude;

}
locationButton.addEventListener('click', LocationMap => {
    if (navigator.geolocation) {
        locstatus.innerHTML = `Location is Coming Up...`;
        navigator.geolocation.getCurrentPosition(showPosition);
    }

});
//Optional Now show that location on a map using fx the Google maps api
function myMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 55.6768, lng: 12.53682 },
        zoom: 9
    });

    new google.maps.Marker({
        position: map.center,
        map: map
    });
}

//Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback
//  function. Try and call this function with different delays and different callback functions

const runAfterDelay = (delay, callBak) => setTimeout(callBak, delay);

runAfterDelay(4, () => { console.log(`should be logged after 4 sec`) });


//Check if we have double clicked on the page. A double click is defined by two clicks
//  within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
const p1 = document.getElementById('double');
let flagDouble = 0;
document.addEventListener('mousedown', displayDouble => {
    flagDouble++;
    if (flagDouble === 2) {
        p1.innerText = `Double clicked`;
    }
    setTimeout(() => {
        flagDouble = 0;
    }, 500);
})

// Create a function called jokeCreator that has three parameters:
// shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke -
// function.If you set shouldTellFunnyJoke to true it
// should call the logFunnyJoke function that should log out a funny joke.And vice versa.

logFunnyJoke = () => console.log(`Funny`);
logBadJoke = () => console.log(`Bad`);
jokeCreator = (shouldTellFunnyJoke, fun1, fun2) => shouldTellFunnyJoke ? fun1() : fun2();
jokeCreator(true, logFunnyJoke, logBadJoke);

// Create an array with 3 items.All items should be functions.
// Iterate through the array and call all the functions.

fun1 = (num) => console.log(num);
fun2 = (num) => console.log(num * num);
fun3 = (num) => console.log(num * num * num);
const funArr = [fun1, fun2, fun3];
funArr.forEach(x => x(2));

//Create an object that has a key whose value is a function. Try calling this function.

const doStuff = (str, num) => console.log(`${str} ${num}`);
const obj = {
    name: "fun",
    role: doStuff
}
obj.role("my name is", 0);
///End