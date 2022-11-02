//job match 1
let candidate = {
    minSalary: 120000,
    rockStar: true
}
let job = {
    maxSalary: 140000
}

function match1(candidate1, job1) {
    if (candidate1.minSalary <= job1.maxSalary) {
        return true;
    }
    else if (candidate1.rokStar) {
        candidate1.minSalary = candidate1.minSalary * 120000 * .1;
        return true;
    }
    else if (candidate1.minSalary == undefined || job1.maxSalary == undefined) {
        throw error;
    }
    else return false;
}
match1(candidate, job);

//job match 2
let candidates = [{
    desiresEquity: true,
    currentLocation: 'New York',
    desiredLocations: ['San Francisco', 'Los Angeles']
}, {
    desiresEquity: false,
    currentLocation: 'San Francisco',
    desiredLocations: ['Kentucky', 'New Mexico']
}];

let job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] };
let job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] };

function match(job, candidates) {
    const newcandidates = candidates.filter(element => job['locations'].some(value => [element['currentLocation'], ...element['desiredLocations']].includes(value)));
    const matchedcandidates = newcandidates.filter(element => (!element['desiresEquity'] || job['equityMax'] > 0));
    return matchedcandidates;

}

const matchedjob1 = match(job1, candidates);
console.log(matchedjob1);
const matchedjob2 = match(job2, candidates);
console.log(matchedjob2);

//unfinished loop bug fixing
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number;) {
        newArray.push(counter);
        counter++;
    }

    return newArray;
}