// create a 16 x 16 grid of square divs
    // use javascript to create
// place them in another container

// Function to create drawing grid
function createGrid() {
    // Variable to set number of pixels wide/height
    const num = 30;
    // Ensures width/height isn't greater than 50 as to not take up computational power
    if (num > 50) {
        num = 50;
    }
    // Creates new variable to set height and width
    const dim = 960/num + 'px';
    // Loop to create grid
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            // Create a new div of width/height of user set input
            const newDiv = document.createElement("div");
            newDiv.style.width = dim;
            newDiv.style.height  = dim;
            newDiv.classList.add("pixel");
            // Event listener to change background color
            newDiv.addEventListener("mouseover", draw);
            // Append newDiv var to DOM
            document.querySelector(".containerGrid").appendChild(newDiv);    
        }
    }
}

// Function to change background color on hovered pixel to black
function draw(event) {
    event.currentTarget.style.backgroundColor = 'black';
}

// Call function to create the pixel Grid
createGrid();