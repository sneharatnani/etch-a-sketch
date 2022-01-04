// to save the grid
let container = document.querySelector('.container');
// to enable standard mode
let standardBtn = document.querySelector('.standard');
// to enable colorful mode
let rainbow = document.querySelector('.rainbow');
// to reset grid
let reset = document.querySelector('.reset');
// generate random rgb color



// default function to generate grid
function getGrid(boxes, color) {
    for (let i = 0; i < boxes * boxes; i++) {
        let div = document.createElement('div');
        container.appendChild(div);

        div.addEventListener('mouseover', (e) => {
            div.style.background = color;
        });
    }
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${boxes}, 1fr); grid-template-rows: repeat(${boxes}, 1fr)`);
}
getGrid(16, 'black');


// reset grid
function resetGrid() {
    /*   while (container.lastChild) {
          container.removeChild(container.lastChild);
      } */
    container.textContent = '';
}

// standard function whith grid adjustment
function getStandard() {
    let boxes = prompt('Enter grid size between 1-100', 16);
    if (boxes > 100) {
        alert('oh very large number. Try again!');
        getGrid(16, 'black');
    }
    else if (boxes === null || boxes === '') {
        getGrid(16, 'black');
    }
    else {
        getGrid(boxes, 'black');
    }
}

// click event on standard button
standardBtn.addEventListener('click', () => {
    resetGrid();
    getStandard();
});

// click event on reset button
reset.addEventListener('click', () => {
    resetGrid();
    getGrid(16, 'black');
});

let rgb01 = () => Math.floor(Math.random() * 255);
let rgb02 = () => Math.floor(Math.random() * 255);
let rgb03 = () => Math.floor(Math.random() * 255);

rainbow.addEventListener('click', () => {
    resetGrid();
    getGrid(16, `rgb(${rgb01()},${rgb02()},${rgb03()})`);
});










