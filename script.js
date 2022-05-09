const gridcontainer = document.getElementById("gridcontainer");
const gridButton = document.getElementById("gridbutton");
const resetButton = document.getElementById("resetbutton");

gridButton.addEventListener('click', () => {
    changeSize();
});




function changeSize() {
    reset()
    let newGrid = prompt("Enter grid size (max 64)")
    if (newGrid <= 64) {
        makeRows(newGrid, newGrid)
    } else {
        alert('Too big grid size')
    }

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

gridcontainer.addEventListener('mouseover', function (e) {
    if (e.target.matches('.grid-item')) {
        e.target.classList.add('active');
    }
});


makeRows(16, 16);