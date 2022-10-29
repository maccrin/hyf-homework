function eventDay(noOfdaysFromToday) {
    const day = new Date();
    const day1 = (day.getDate() + Number(noOfdaysFromToday));
    day.setDate(day1);
    const weekDay = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }
    return weekDay[day.getDay()];
}
const noOFdaysfromToday = prompt("After how many days from today you want this event");
console.log(`The event  day falls on  ${eventDay(noOFdaysfromToday)}`);



