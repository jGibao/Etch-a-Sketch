let color = "rgb(180, 180, 180)";
let shade1 = "rgb(92, 92, 92)";
let shade2 = "black";
let click = false;


function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove);
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square)
    }
}

function changeSize(input) {
    if (input < 4 || input > 128) {
        console.log("Too many squares.")
    } else {
        populateBoard(input);
        resetBoard();
    }
    click = false;
}

function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        } else if (color == "white") {
            this.style.backgroundColor = "white";
        } else if (this.style.backgroundColor == color) {
            this.style.backgroundColor = shade1;
        } else if (this.style.backgroundColor == shade1) {
            this.style.backgroundColor = shade2;
        } else if (this.style.backgroundColor == shade2) {

        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor = 'white');
    //squares.forEach(div => div.style.webkitFilter = "brightness(100%)");
    console.log("reset");
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
        click = !click;
    }
});

populateBoard(16);