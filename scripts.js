const grid = document.querySelector('.gridContainer');
const resetBtn = document.querySelector('#reset');
const clasicBtn = document.querySelector('#classic');
const rainbowBtn = document.querySelector('#rainbow');


function makeGrid(input = 16) {
    let gridCol = `repeat(${input}, 1fr)`;
    let gridRow = `repeat(${input}, 1fr)`;
    for (let i = 0; i < input * input; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        const gridAttributes = document.createAttribute('style');
        gridAttributes.value = `grid-template-columns: ${gridCol}; grid-template-rows: ${gridRow};`
        grid.setAttributeNode(gridAttributes);
        grid.appendChild(div);
    }
}




function changeColor(e) {
    grid.addEventListener('mouseover', (e) => {
        if (e.target.matches('div.square')) e.target.style.backgroundColor = 'black';
    });
}
function changeColorRandom(e) {
    grid.addEventListener('mouseover', (e) => {
        if (e.target.matches('div.square')) {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        }
    });
}
function resetGrid(e) {
    let input = prompt('Enter new grid size from 10 to 100:', 16);
    if (isNaN(input)) {
        window.alert("You must enter a NUMBER in the range.");
        return;
    } else if (input < 10 || input > 100) {
        window.alert('You must enter a number within the given range.');
        return;
    }
    while (grid.firstChild) grid.removeChild(grid.firstChild);
    makeGrid(input);
}

clasicBtn.addEventListener('click', changeColor);
rainbowBtn.addEventListener('click', changeColorRandom);
resetBtn.addEventListener('click', resetGrid);


makeGrid();

