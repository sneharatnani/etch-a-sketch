// to save the grid
let container = document.querySelector('.container');
// to enable standard mode
let standardBtn = document.querySelector('.standard');
// to enable colorful mode
let RainbowBtn = document.querySelector('.rainbow');
// to erase grid
let erase = document.querySelector('.erase');


// to generate grid
function getGrid(boxes, funcName) {
    for (let i = 0; i < boxes * boxes; i++) {
        let div = document.createElement('div');
        container.appendChild(div);

        div.addEventListener('mouseover', funcName);
    }
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${boxes}, 1fr); grid-template-rows: repeat(${boxes}, 1fr)`);
}


// adjust grid according to the input
function adjustGrid(funcName) {
    let boxes = prompt('Enter grid size between 1-100', 16);
    if (boxes > 100) {
        alert('oh very large number. Try again!');
        getGrid(16, funcName);
    }
    else if (boxes === null || boxes === '') {
        getGrid(16, funcName);
    }
    else {
        getGrid(boxes, funcName);
    }
}

/* functions for event listener */

// default function
function makeDefault(e) {
    e.target.style.background = 'black';
}
// for rainbow mode
function giveRainbow(e) {
    e.target.style.background = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
}

getGrid(16, makeDefault);


// erase grid
function eraseGrid() {
    container.textContent = '';
}

// to make random color
function getColor() {
    let color = Math.floor(Math.random() * 255);
    return color;
}


// events
standardBtn.addEventListener('click', () => {
    eraseGrid();
    adjustGrid(makeDefault);
});

erase.addEventListener('click', () => {
    eraseGrid();
    getGrid(16, makeDefault);
});

RainbowBtn.addEventListener('click', () => {
    eraseGrid();
    adjustGrid(giveRainbow);
});

// change year in the footer
let year = document.querySelector('footer span');
year.textContent = new Date().getFullYear();
























