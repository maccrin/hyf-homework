const activities = [];
const dailyUsageLimit = 45;

function addActivity(date, inputActivity, duration) {
    if (typeof inputActivity !== "string" || !(Number.isInteger(duration)) || arguments.length !== 3) {
        console.log(`Provide valid input`);
        return;
    }
    date = date.toLocaleDateString();
    activities.push({ date: date, activity: inputActivity, duration: duration });
}
//add some activites in different dates.
const date = new Date();
const date1 = new Date("2023-09-09");
const date2 = new Date("2022-09-09");
const date3 = new Date("2022-02-18");
addActivity(date, "Youtube", 15);
addActivity(date1, "Youtube", 20);
addActivity(date2, "Youtube", 25);
addActivity(date3, "Youtube", 15);
addActivity(date, "Insta", 26);
addActivity(date1, "Insta", 22);
addActivity(date2, "Insta", 8);
addActivity(date3, "Insta", 5);
addActivity(date, "Facebook", 10);
addActivity(date1, "Facebook", 26);
addActivity(date2, "Facebook", 10);
addActivity(date3, "Facebook", 5);

console.log(activities);

function showStatus(date) {

    if (activities.length === 0) {
        console.log(`Add some activites before calling showstatus`);
        return;
    }
    else {
        const todayActivities = showActivities(date);
        const usage = todayActivities.reduce((accumulator, currentvalue) => accumulator += currentvalue['duration'],
            0);
        console.log('Total usage on ' + date + ' is ' + usage + ' hours');
        console.log(usage > dailyUsageLimit ? "You have exceed the dailyusage limit" : " You have still some usage limit as surplus");
        console.log('The number of activities on ' + date + ' is ' + todayActivities.length);
        return todayActivities;

    }
}
const showActivities = date => activities.filter(element => element['date'] === date);
let today = new Date();
today = today.toLocaleDateString();
const todayActivity1 = showStatus(today);
console.log(`Your activity list`);
console.log(todayActivity1);
const todayActivity2 = showStatus('18/2/2022');
console.log(`Your activity list`);
console.log(todayActivity2);
//optional are below
//Improve the showStatus function by only showing the number of actitivies for that specific day
//Create a function for calculating the activity a user has spent the most time on.

const maxActivity = activities.map(element => element['duration']);
const max = Math.max(...maxActivity);
const maxActivities = activities.filter(element => element.duration === max);
console.log('Maximum time spent on below activities');
console.log(maxActivities);

//extra feature

//mark those activities as exception whose duration is more than or equal to 15 hours 
//and set those with a boolean  value for a specific.
function overplayedActivities(actitivies, specificdate) {
    const extraview = activities.filter((element, date) => element['duration'] >= 15 && element['date'] === specificdate);
    for (const element of extraview) {
        element['considerably'] = true;
    }
    console.log('List of those activities whose duration time is more than 15 hours on ' + specificdate);
    console.log(extraview);

}
overplayedActivities(activities, '9/9/2023');


