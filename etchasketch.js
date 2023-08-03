// create a 16 x 16 grid of square divs
    // use javascript to create
// place them in another container

function createGrid() {
    const num = 16;
    for (i = 0; i < num; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.width = '100px';
        newDiv.style.height = '100px';
        newDiv.style.background = 'red';
        document.querySelector(".containerGrid").appendChild(newDiv);
    }
}

createGrid();