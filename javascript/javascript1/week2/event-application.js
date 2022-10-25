function eventDay(noOfdaysFromToday) {
    const day = new Date();
    console.log(`Today is ${day}`);
    console.log(`The evente is after ${noOFdaysfromToday} days`);
    const day1 = (day.getDate() + Number(noOfdaysFromToday));
    day.setDate(day1);
    const month = {
        0: "Januray", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "Auguest", 8: "September",
        9: "October", 10: "November", 11: "December"
    }
    const weekDay = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }
    console.log("The event is on " + day);
    console.log("which is  " + month[day.getMonth()] + " " + day.getFullYear());
    return weekDay[day.getDay()];

}
const noOFdaysfromToday = prompt("After how many days from today you want this event");
console.log(`The event  day falls on  ${eventDay(noOFdaysfromToday)}`);

