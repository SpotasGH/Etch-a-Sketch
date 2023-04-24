let slider = document.querySelector('.slide');

slider.onmousemove = (e) => gridSize(e.target.value)
slider.onchange = (e) => updateGrid(e.target.value)

let grid = document.querySelector('.board');

function gridSize(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('gridElement')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
    
}

function changeColor(e) {
    if (e.type === 'mouseover') {
        e.target.style.backgroundColor = '#333333'
    }
    console.log(e.target)
}

function updateGrid(value) {
    gridSize(value)
    clearGrid()
}

function clearGrid() {
    grid.innerHTML = ''
}

window.onload = () => {
    gridSize(16)
}