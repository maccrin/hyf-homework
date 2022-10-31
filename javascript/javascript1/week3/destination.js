const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
const travelInformation1 = {
    speed: 90,
    destinationDistance: 6320,
};

function totalTime(travelobj) {
    const time = travelobj.destinationDistance / travelobj.speed;
    const hour = Math.floor(time);
    const minute = Math.round((time - hour) * 60);
    return (` ${hour} hours and ${minute} minutes`);
}
const travelTime = totalTime(travelInformation);
const travelTime1 = totalTime(travelInformation1);
console.log(`Total travel time is ${travelTime}`);
console.log(`Total travel time is ${travelTime1}`);