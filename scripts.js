const grid = document.querySelector('.gridContainer');
const resetBtn = document.querySelector('#reset');
const buttons = document.querySelectorAll('.buttons');

function makeGrid(input = 16) {
    let gridCol = `repeat(${input}, 2fr)`;
    let gridRow = `repeat(${input}, 2fr)`;
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
    switch (e.target.id) {
        case 'classic':
            grid.addEventListener('mouseover', (e) => {
                if (e.target.matches('div.square')) e.target.style.backgroundColor = 'black';
            });
            break;
        case 'rainbow':
            grid.addEventListener('mouseover', (e) => {
                if (e.target.matches('div.square')) {
                    const randomR = Math.floor(Math.random() * 256)
                    const randomG = Math.floor(Math.random() * 256)
                    const randomB = Math.floor(Math.random() * 256)
                    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
                }
            });
            break;
        case 'eraser':
            grid.addEventListener('mouseover', (e) => {
                if (e.target.matches('div.square')) e.target.style.backgroundColor = 'beige';
            });
            break;
    }
}

function resetGrid(e) {
    let input = prompt('Enter new grid size from 10 to 50:', 16);
    if (isNaN(input)) {
        window.alert("You must enter a NUMBER in the range.");
        return;
    } else if (input < 10 || input > 50) {
        window.alert('You must enter a number within the given range.');
        return;
    }
    while (grid.firstChild) grid.removeChild(grid.firstChild);
    makeGrid(input);
}

buttons.forEach(btn => btn.addEventListener('click', changeColor));
resetBtn.addEventListener('click', resetGrid);

makeGrid();

