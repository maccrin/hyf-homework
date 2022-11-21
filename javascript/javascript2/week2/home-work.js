//doubling the odd numbers
const myarray = new Array(22, 79, 34, 17, 1095, 678, 345, 982, 899, 6784, 72837, 56783, 98986);
console.log(myarray.filter(x => x % 2 != 0).map(x => x * 2));

//Movies
//short title
const shortTitle = movies.filter(x => x.title.split(' ').length <= 2);
console.log(shortTitle);
//long title
const longTitle = movies.filter(x => x.title.split(' ').length > 2);
console.log(longTitle);
// year  1980-1989
const year = movies.filter(x => (x.year >= 1980 && x.year <= 1989));
console.log(year);
//taging on the basis of rating
const movies_rating = movies.map((x) => {
    const movietag = (x.rating >= 7) ? 'Good' : ((4 <= x.rating < 7) ? "AVG" : "Bad");
    x.tag = movietag;
    return x;
});
console.log(movies_rating);

//Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
console.log(movies.filter(x => x.rating > 6).map(x => x.rating));

//Create an array of movies where a word in the title is duplicated. 
// Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples 
// of movies with duplicated words in the title: "The three men and the pistol", "Chase three - 
// The final chase"
const title = movies.filter(x => {
    const y = x.title.split(' ');
    if (y.some((z) => (y.indexOf(z) !== y.lastIndexOf(z)))) return x;
})
console.log(title);


//Calculate the average rating of all the movies using reduce. Optional
const totalrating = movies.reduce((accu, curr) => accu += curr.rating, 0);
console.log(`avg rating ${totalrating / movies.length}`);
//Count the total number of Good, Average and Bad movies using reduce. A return could fx be 
//{goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional

let gMovies = 0, bMovies = 0, avMovies = 0;
movies_rating.reduce((accu, curr) => (
    (curr.tag === "Good") ? gMovies++ : ((curr.tag === "AVG") ? avMovies++ : bMovies++)), {});

const movieCount = {
    goodMovies: gMovies,
    averageMovies: avMovies,
    badMovies: bMovies

}
console.log(movieCount);

// Count the total number of movies containing any of following keywords: Surfer,
//  Alien or Benjamin.So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin,
// you would return 6. Can you make sure the search is case insensitive ?

const name = /Surfer|Alien|Benjamin/ig;  //i is isued for case insensitive
const nameMovies = movies.filter(x => x.title.match(name)).map(x => x.title);
console.log(nameMovies);

