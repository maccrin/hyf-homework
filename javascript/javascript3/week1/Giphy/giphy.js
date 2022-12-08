const text = document.getElementById('search');
const num = document.getElementById('count');
const button = document.getElementById('gif-search');
const ul = document.getElementById('giphy');

function showResult(jsonData) {
    ul.innerHTML = '';
    text.value = '';
    num.value = '';
    jsonData.data.forEach((x) => {
        const li = document.createElement('li');
        const imgd = document.createElement('img');
        imgd.setAttribute('src', ``);
        imgd.setAttribute('alt', `giphy_pic`);
        imgd.src = `${x.images.fixed_width.url}`;
        li.appendChild(imgd);
        ul.appendChild(li);
    })

}
function displayGif() {
    const noOfItems = num.value;
    const typeOfitem = text.value;
    try {
        if (noOfItems && typeOfitem) {
            const url = new URL("https://api.giphy.com/v1/gifs/search?");
            const option = {
                api_key: "lAgyMVDClhSIxJ27urQiF8cNNimnGoKE",
                limit: noOfItems,
                q: typeOfitem
            }
            Object.keys(option).forEach(key => {
                url.searchParams.append(key, option[key]);
            })
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    showResult(data);
                });

        }
        else {
            throw new Error(`Hej Enter proper keyword or number of Items`);
        }
    }
    catch (e) {
        alert(e.message);
    }
}

button.addEventListener('click', displayGif);
