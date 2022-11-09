function getRenderedGame(array_game) {
    const array_2d = JSON.parse(JSON.stringify(array_game));// slice method here changing the original array "position"
    //  so I had to use here JSON to keep intct my original array.
    //here Array of literal-structures is copying like [[],[]] so slice method will do  shallow copy not deep copy.
    const stararray1 = Array(7).fill("*", 0);
    const stararray2 = Array(7).fill("*", 0);
    array_2d.unshift(stararray1);
    array_2d.push(stararray2);

    for (let i = 1; i < array_2d.length - 1; i++) {
        array_2d[i].unshift('*');
        array_2d[i].push('*');
        array_2d[i].splice(2, 0, '*');
        array_2d[i].splice(4, 0, '*');
    }

    const flat_array = array_2d.map(ele => ele.join('')).join('\r\n');
    return flat_array;
}
const position = [['x', 'o', ' '], [' ', 'o', ' '], [' ', 'o', 'x']];
const renderedGame = getRenderedGame(position);
console.log(renderedGame);
// function to check occurance of every player and create objct named ob .
function getGameinfo(game_position) {
    const ob = game_position.flat().reduce((accu, curr) => {
        if (!accu[curr]) {
            accu[curr] = 0;
        }
        accu[curr] = accu[curr] + 1;
        return accu;
    }, {})
    console.log(ob);
    let game_result = {
        winner: '',
        loser: '',
        hasended: ''
    }
    ob.x > ob.o ? (game_result.winner = 'x', game_result.loser = 'o', game_result.hasended = true)
        : (ob.o > ob.x ? (game_result.winner = 'o', game_result.loser = 'x', game_result.hasended = true) : game_result.hasended = false);
    return game_result;
}
const gameInfo = getGameinfo(position);
console.log(gameInfo);
const position1 = [
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', 'o', 'x']
];
const gameInfo1 = getGameinfo(position1);
console.log(gameInfo1);


//////Credit card display in every 4 digit number
const card_num = "980987657878496756";
const display_pattern = card_num.match(/\d{1,4}/g).join(' ');
const output = display_pattern;
console.log(`Card display ${output}`);

//////////////////////////// longest substring palindrome
function ispalin(str) {
    const rev = str.split('').reverse().join('');
    if (rev === str) {
        return true;
    }
    else
        return false;
}

function longestpalin(str) {
    let longstr = ' ';
    let max_len = 0;
    for (let i = 0; i < str.length; i++) {
        // inner loop is fetching every single char from right to left and till that char  making 
        //  a substring to checkk if that substring is a palindrome or not, this recursion process going on until j reaches to
        //  i th position.
        for (let j = str.length; j >= i; j--) {
            let sub_str = str.substring(i, j);
            if (ispalin(sub_str)) {
                if (sub_str.length > max_len) {
                    longstr = sub_str;
                    max_len = sub_str.length;
                }
            }
        }
    }

    return longstr;
}
const input = "forgeeksskeegfor";
console.log(longestpalin("orgeeksskeegfor"));
console.log(longestpalin("racecar"));
console.log(longestpalin("banana"));
console.log(longestpalin("abcdefghijkkjihgmnoy"));
