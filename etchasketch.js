// create a 16 x 16 grid of square divs
    // use javascript to create
// place them in another container

function createGrid() {
    const num = 16;
    const dim = 960/num + 'px';
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            const newDiv = document.createElement("div");
            newDiv.style.width = dim;
            newDiv.style.height = dim;
            // newDiv.style.borderStyle = 'solid';
            newDiv.style.backgroundColor = 'lightblue';
            newDiv.style.flex = '0 1 auto';
            document.querySelector(".containerGrid").appendChild(newDiv);    
        }
    }
}

createGrid();