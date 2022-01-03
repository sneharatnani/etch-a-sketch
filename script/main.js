let container = document.querySelector('.container');
let standardBtn = document.querySelector('.standard');
function getBoxes() {

    for (let i = 0; i < 256; i++) {
        let boxes = document.createElement('div');
        boxes.addEventListener('mousemove', () => {
            boxes.style.background = 'black';
        });
        container.appendChild(boxes);
    }
    container.setAttribute('style', 'grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr)');
}
getBoxes();

standardBtn.addEventListener('click', giveStandard);

function giveStandard() {
    let gridNum = prompt('Enter the grid size which is <= 100');
    let doubleNum = gridNum * gridNum;

    if (gridNum === null || gridNum === '' || gridNum === undefined || gridNum > 100 || gridNum === 16) {
        getBoxes();
    }

    else {
        for (let i = 0; i < doubleNum; i++) {
            let blackBoxes = document.createElement('div');
            blackBoxes.addEventListener('mousemove', () => {
                blackBoxes.style.background = 'black';
            });
            container.appendChild(blackBoxes);
        }
        container.setAttribute('style', `grid-template-rows: repeat(${gridNum}, 1fr); grid-template-columns: repeat(${gridNum}, 1fr)`);
    }
}

