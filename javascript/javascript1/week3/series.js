const seriesDurations = [{
    title: "Game of thrones",
    days: 3,
    hours: 18,
    minutes: 0,
},
{
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
},
{
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
},

{
    title: "Lost in space",
    days: 1,
    hours: 17,
    minutes: 10,
},
];
function logOutSeriesText() {
    let totalTime = 0;
    const lifeSpan = 80 * 365 * 24 * 60;
    for (let element of seriesDurations) {
        const totalduration = (element['days'] * 24 * 60) + (element['hours'] * 60) + element['minutes'];
        const percentageInLife = ((totalduration / lifeSpan) * 100);
        console.log(`${element.title} took ${percentageInLife.toFixed(3)}% of my life.`);
        totalTime += totalduration;
    }
    console.log(`Total ${calculateTotalPercent(totalTime, lifeSpan).toFixed(4)}% wasted for all these series in my life!!`);
}

function calculateTotalPercent(totalSeriesTime, longevity) {
    return (totalSeriesTime / longevity) * 100;
}
logOutSeriesText();