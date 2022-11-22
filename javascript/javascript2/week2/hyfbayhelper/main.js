const products = getAvailableProducts();
console.log(products);
const button = document.getElementById('click');
const ul1 = document.getElementById('list');
let filFlag = false;
let result = [];
let pageNo = 1;
function createList(prods) {
    const uid = document.getElementById('product');
    uid.innerHTML = '';
    for (const prod of prods) {
        const lid = document.createElement("li");
        const name = document.createElement("p");
        name.innerHTML = ` Name: ${prod.name}`;
        const price = document.createElement("p");
        price.innerHTML = `Price : ${prod.price}`;
        const rating = document.createElement("p");
        rating.innerHTML = `Rating: ${prod.rating}`;

        lid.appendChild(name);
        lid.appendChild(price);
        lid.appendChild(rating);
        uid.appendChild(lid);
    }

}


function displayFilter() {

    const fil = {};
    const maxp = parseInt(document.getElementById('max-price').value);
    const minp = parseInt(document.getElementById('min-price').value);
    if (!isNaN(maxp)) fil.maxprice = maxp;
    if (!isNaN(minp)) fil.minprice = minp;

    filteredresult = filteredProducts(products, fil);
    filFlag = true;
    displayPaginationButtons(filteredresult);
    displayProducts(filteredresult, 1);
    result = filteredresult;
}

function filteredProducts(prods, fil) {
    for (const key in fil) {

        switch (key) {
            case "maxprice": {
                prods = prods.filter((item) => item.price <= fil.maxprice);
                break;
            }
            case "minprice": {
                prods = prods.filter((item) => item.price >= fil.minprice);
                break;
            }

        }
    }

    return prods;

}
function clearFilter() {
    const maxp = document.getElementById('max-price');
    maxp.value = '';
    const minp = document.getElementById('min-price');
    minp.value = '';
    filFlag = false;
    displayPaginationButtons(products);
    displayProducts(products, 1);
}
function sortedProds(prods, type) {

    switch (type) {
        case "name": {
            prods.sort((prod1, prod2) => prod1['name'].replaceAll('"', '').toLowerCase().localeCompare(prod2['name'].replaceAll('"', '').toLowerCase(), 'en', { sensitivity: 'base' }));
            break;
        }
        case "expen": {
            prods.sort((prod1, prod2) => prod2['price'] - prod1['price']);
            break;
        }
        case "cheap": {
            prods.sort((prod1, prod2) => prod1['price'] - prod2['price']);
            break;
        }
        case "rat": {
            prods.sort((prod1, prod2) => prod1['rating'] - prod2['rating']);
            break;

        }

    }
    result = prods;
    return result;
}


button.addEventListener('click', displayFilter);
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFilter);

document.getElementById('sort').onclick = (ele) => {
    if (ele.target.value === 'name') {
        type = 'name';
        filFlag === true ? displayProducts(sortedProds(result, type), 1) : displayProducts(sortedProds(products, type), 1);
    }
    if (ele.target.value === 'expen') {
        type = 'expen';
        filFlag === true ? displayProducts(sortedProds(result, type), 1) : displayProducts(sortedProds(products, type), 1);
    }
    if (ele.target.value === 'cheap') {
        type = 'cheap';
        filFlag === true ? displayProducts(sortedProds(result, type), 1) : displayProducts(sortedProds(products, type), 1);
    }
    if (ele.target.value === 'rat') {
        type = 'rat';
        filFlag === true ? displayProducts(sortedProds(result, type), 1) : displayProducts(sortedProds(products, type), 1);
    }

}


function searchProd1() {
    const searchName = document.getElementById('namesearch').value;
    const nameToSearch = new RegExp(`^${searchName}`, "i");
    let search = products.filter(x => x.name.match(nameToSearch));
    filFlag = true;
    result = search;
    displayPaginationButtons(result);
    displayProducts(result, 1);

}

function searchProd2() {
    const maxp = parseInt(document.getElementById('pricesearch').value);
    let search = products.filter(x => x.price <= maxp);
    filFlag = true;
    result = search;
    console.log(maxp);
    if (!isNaN(maxp)) {
        displayPaginationButtons(result);
        displayProducts(result, 1);
    }
    else {
        displayPaginationButtons(products);
        displayProducts(products, 1);
        filFlag = false;

    }
}
function displayPaginationButtons(prods) {
    ul1.innerHTML = '';
    NoOfItemsPerPage = 5;
    const noOfButton = Math.ceil(prods.length / NoOfItemsPerPage);
    for (i = 0; i < noOfButton; i++) {
        const li1 = document.createElement('li');
        const button1 = document.createElement('button');
        button1.innerText = i + 1;
        li1.appendChild(button1);
        ul1.appendChild(li1);
    }
}
ul1.onclick = (e) => {
    pageNo = parseInt(e.target.innerText);
    if (filFlag === true) {
        displayProducts(result, pageNo);
    }
    else
        displayProducts(products, pageNo)
}
function displayProducts(prods, pageNo) {
    const uid = document.getElementById('product');
    uid.innerHTML = '';
    const noOfItemPerPage = 5;
    const l = prods.length;
    const startIndex = (pageNo * 5) - 5;
    const h1 = document.getElementById('info');
    h1.textContent = `Each Page With 5 Items`;
    copy = [...prods].splice(startIndex, noOfItemPerPage);
    createList(copy);


}

document.getElementById('pricesearch').addEventListener('keyup', searchProd2);
document.getElementById('namesearch').addEventListener('keyup', searchProd1);
displayPaginationButtons(products);
displayProducts(sortedProds(products, "name"), 1);