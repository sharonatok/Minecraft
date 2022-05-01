

const tree = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
];

const theTreeFigure = []

let currentPosition = 4;

let random = Math.floor(Math.random()*theTreeFigure.length);

let current = theTreeFigure[0][0];

function draw() {
    current.forEach(index => {
        squares[currentPosition+ index].classList.add(theTree)
    })

}
draw()