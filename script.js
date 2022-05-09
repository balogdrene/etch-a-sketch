const gridcontainer = document.getElementById("gridcontainer");
const gridButton = document.getElementById("gridbutton");

gridButton.addEventListener('click', () => {
    changeSize();
});

function changeSize() {
    reset()
    let newGrid = prompt("New grid size")
    makeRows(newGrid, newGrid)
}

function makeRows(rows, cols) {
    gridcontainer.style.setProperty('--grid-rows', rows);
    gridcontainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        gridcontainer.appendChild(cell).className = "grid-item";
    };
};

function reset() {
    document
        .querySelectorAll(".grid-item")
        .forEach((e) => e.parentNode.removeChild(e));
}


makeRows(16, 16);