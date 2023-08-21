// create a 16 x 16 grid of square divs
// use javascript to create
// place them in another container

// Function to create drawing grid
function createGrid(num) {
    // Clear etch a sketch container
    document.querySelector(".containerGrid").innerHTML = "";
    // If no user selection, default value will be 32 pixels
    if (!num) {
        num = 50;
    }
    // Ensures width/height isn't greater than 100 as to not take up computational power
    if (num > 100) {
        num = 100;
    }
    // Creates new variable to set height and width
    const dim = 960 / num + 'px';
    // Loop to create grid
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            // Create a new div of width/height of user set input
            const newDiv = document.createElement("div");
            newDiv.style.width = dim;
            newDiv.style.height = dim;
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
    let style = document.querySelector("#changeGrid")
    if (style.className == "gradient") {
        event.currentTarget.style.backgroundColor = 'black';
    }
    else if (style.className == "randColor") {
        event.currentTarget.style.backgroundColor =
            "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    }
    else {
        event.currentTarget.style.backgroundColor = 'black';
    }
}

// Function to allow user to change grid size
function changeGrid() {
    let size = prompt("Enter new grid size");
    size = size.trim();
    if (size == null) {
        console.log("null");
    }
    // Ensures user only enters a number for grid size
    while (isNaN(size) || size == null || !size) {
        size = prompt("Enter a number only");
        size = size.trim();

    }
    createGrid(size);
}

function randColor() {
    document.querySelector("#changeGrid").className = 'randColor';
}

function gradient() {
    document.querySelector("#changeGrid").className = 'gradient';
}

function blackWhite() {
    document.querySelector("#changeGrid").className = 'blackWhite';
}

// Call function to create the pixel Grid
createGrid();