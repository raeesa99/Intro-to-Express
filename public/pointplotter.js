const container = document.getElementById('container');

const board = document.getElementById('board');

const x = document.getElementById('x')
const y = document.getElementById('y')
console.log(x.value);
console.log(y.value);

const btn = document.getElementById('btn');

let widthX = document.getElementById('board').offsetWidth;
let heightY = document.getElementById('board').offsetHeight;
let maxX = document.getElementById('maxx').innerText = widthX -6;
let maxY = document.getElementById('maxy').innerText = heightY -6;

class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pointElement = this.constructPoint();
        console.log(this.pointElement);
        this.plotPoint();
    }

constructPoint() {
    let point = document.createElement('div')
    this.x = x.value - 4
    this.y = y.value - 4
    point.style.left = this.x + 'px';
    point.style.top  = this.y + 'px';
    point.classList.add('point')
    
    return point;
}

plotPoint() {
    board.appendChild(this.pointElement)
    } 
}

btn.addEventListener("click", xy)

function xy() {
    console.log(x.value, y.value);
    if (x.value > maxX || y.value > maxY) {
        alert("please enter a number within maximum range for both x and y");
        return;
    } else {
        let newPoint = new Dot (x.value, y.value)
        newPoint.plotPoint()
    }
}
