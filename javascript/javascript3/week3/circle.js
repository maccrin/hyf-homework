const canvas = document.getElementById('circle');
const canvas1 = document.getElementById('mousecircle');

class Circle {
    constructor(x, y, r, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.fillColor = fillColor;

    }

    draw(canvasContext) {
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        canvasContext.fillStyle = this.fillColor;
        canvasContext.fill();
        canvasContext.strokeStyle = '#003300';
        canvasContext.stroke();

    }
}
const random_rgba = () => {
    const r = randomIntFromInterval(0, 255);
    const g = randomIntFromInterval(0, 255);
    const b = randomIntFromInterval(0, 255);
    return `rgba(${r},${g},${b},0.3)`;
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
canvas1.addEventListener('mousemove', (e) => {
    clearInterval(intervalClear);
    let context1 = canvas1.getContext('2d');
    let rect = canvas.getBoundingClientRect();
    const randomRadius = randomIntFromInterval(1, 20);
    const randomColor = random_rgba();
    const eachCircle = new Circle(e.clientX, e.clientY, randomRadius, randomColor);
    eachCircle.draw(context1);
})
const intervalClear = setInterval(() => {
    let context = canvas.getContext('2d');
    const randomRadius = randomIntFromInterval(1, 27);
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const randomColor = random_rgba();
    const eachCircle = new Circle(x, y, randomRadius, randomColor);
    eachCircle.draw(context);
}, 100);
