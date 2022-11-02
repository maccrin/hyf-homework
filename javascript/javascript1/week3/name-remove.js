const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

function nameRemove(name) {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === name) {
            names.splice(i, 1);
            break;
        }
    }
}

const nameToRemove = nameRemove("Ahmad");
const nameRemove1 = nameRemove("Samuel");
// Write some code here

// Code done

console.log(names); 
