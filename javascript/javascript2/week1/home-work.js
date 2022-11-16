const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shWord(words) {
    const word = words.reduce((accu, curr) => {
        return accu.length <= curr.length ? accu : curr;
    })
    return word;
}
console.log(shWord(danishWords));

//danish letter counting
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function count(dstring) {
    let output = {};
    const count1 = (dstring.match(/[å]/g) || []).length;
    const count2 = (dstring.match(/[ø]/g) || []).length;
    const count3 = (dstring.match(/[æ]/g) || []).length;
    const total = count1 + count2 + count3;
    return { total, 'å': count1, 'ø': count2, 'æ': count3 };

}

console.log(count(danishString));
console.log(count(danishString2));

// // Sprit Animal
const username = document.createElement('input');
username.setAttribute('type', 'text');
username.placeholder = 'Enter Name Here'
const getspanimal = document.createElement('button')
getspanimal.innerText = 'Click Here';
const spName = document.createElement('label');
spName.innerText = 'Animal Name';
document.getElementById('spanimal').appendChild(username);
document.getElementById('spanimal').appendChild(spName);
document.getElementById('spanimal').appendChild(getspanimal);

const spAnimal = new Array("The colorful butterfly", "Amzazing rabbit", "The innocent Dove", "The blue Dragon",
    "The ambisious Eagle", "The trusty Dog", "floating Dolphin", "Curiuos cat", "Unstopable Lion", "Dancing Peacock");
function displaySpAnimal() {
    if (username.value.length === 0) spName.innerText = `Enter name`;
    else {
        let ran = Math.floor(Math.random() * 10);
        spName.innerHTML = `${username.value} - ${spAnimal[ran]}`;
    }
    if (event.type === 'keypress') {
        console.log(`${event.key},${event.code}`);
    }
}

// const getspanimal = document.getElementById('buttonspirit');
getspanimal.addEventListener('click', displaySpAnimal);

//advance option

document.getElementById('parent').onclick = (ele) => {
    username.value = '';
    if (ele.target.value === 'mousehover') {
        username.addEventListener('mouseover', displaySpAnimal);
        getspanimal.removeEventListener('click', displaySpAnimal);
        document.removeEventListener('keypress', displaySpAnimal);
    }
    else if (ele.target.value === 'button') {
        username.removeEventListener('mouseover', displaySpAnimal);
        getspanimal.addEventListener('click', displaySpAnimal);
        document.removeEventListener('keypress', displaySpAnimal);
    }
    else if (ele.target.value === 'spritname') {

        document.addEventListener('keypress', displaySpAnimal);
        username.removeEventListener('mouseover', displaySpAnimal);
        getspanimal.removeEventListener('click', displaySpAnimal);

    }

}






