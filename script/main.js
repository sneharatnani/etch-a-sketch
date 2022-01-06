let container = document.querySelector('.container');
let standardBtn = document.querySelector('.standard');
let rainbowBtn = document.querySelector('.rainbow');
let sketchBtn = document.querySelector('.sketch');
let erase = document.querySelector('.erase');

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

// default function
function makeDefault(e) {
    e.target.style.background = 'black';
}
// for rainbow mode
function giveRainbow(e) {
    e.target.style.background = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
}

// sketch mode
function makeSketch(e) {
    let opacity = +e.target.style.opacity;
    if (e.target.style.opacity <= 0.9) {
        opacity += 0.1;
    }
    e.target.style.background = `rgb(0,0,0)`;
    e.target.style.opacity = opacity;
}

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
window.addEventListener('load', () => {
    getGrid(16, makeDefault);
});

sketchBtn.addEventListener('click', () => {
    eraseGrid();
    adjustGrid(makeSketch);
});

standardBtn.addEventListener('click', () => {
    eraseGrid();
    adjustGrid(makeDefault);
});

erase.addEventListener('click', () => {
    eraseGrid();
    getGrid(16, makeDefault);
});

rainbowBtn.addEventListener('click', () => {
    eraseGrid();
    adjustGrid(giveRainbow);
});

// change year in the footer
let currentYear = document.querySelector('footer span');
currentYear.textContent = new Date().getFullYear();
























