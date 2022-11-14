console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    // your code here
    const uid = document.getElementById('prod');
    products.map(eachprd => {
        uid.appendChild(createElementWithAttrib('li', `name:${eachprd.name}`));
        uid.appendChild(createElementWithAttrib('li', `price:${eachprd.price}`));
        uid.appendChild(createElementWithAttrib('li', `rating:${eachprd.rating}`));
    })

}
function createElementWithAttrib(type, content) {
    const lid = document.createElement(type);
    lid.innerText = content;
    content.includes('name') ? lid.style.fontWeight = 'bold' : lid.style.fontWeight = 'normal;'
    return lid;
}

renderProducts(products); // This should create the ul and the li's with the individual products details