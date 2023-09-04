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
    // Determines the currently selected drawing style from the activated button
    let style = document.querySelector("#changeGrid")
    // Gradient or "darkening" effect
    if (style.className == "gradient") {
        // Gets the current style of the pixel
        var computedStyle = window.getComputedStyle(event.currentTarget);
        // Assigns current pixels background color to new variable
        var bgColor = computedStyle.backgroundColor;
        // Assigns r g b values to their own array
        let colorValues = bgColor.slice(4, -1).split(", ");
        let redValue = parseInt(colorValues[0], 10);
        let greenValue = parseInt(colorValues[1], 10);
        let blueValue = parseInt(colorValues[2], 10);

        // Darkens the r g b values by 10% until they reach 0
        redValue = redValue - 25;
        if (redValue < 0) {
            redValue = 0;
        }

        greenValue = greenValue - 25;
        if (greenValue < 0) {
            greenValue = 0;
        }

        blueValue = blueValue - 25;
        if (blueValue < 0) {
            blueValue = 0;
        }

        // Creates new rgb() background color with new values
        let newBackground = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
        // Sets pixel to new backgroudn color
        event.currentTarget.style.backgroundColor = newBackground;
    }
    // Assigns random color to current pixel
    else if (style.className == "randColor") {
        // Calls random function for each r g b value
        const randColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        event.currentTarget.style.backgroundColor = randColor;
    }
    // Sets pixel color to match original background color
    else if (style.className == "eraser") {
        event.currentTarget.style.backgroundColor = 'lightgrey';
    }
    // Default drawing mode is to make the background black
    else {
        event.currentTarget.style.backgroundColor = 'black';
    }
}

// Random number generator 
function random(number) {
    return Math.floor(Math.random() * (number + 1));
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
    // Sets size to an int and rounds it to a whole number
    parseInt(size, 10);
    size = Math.floor(size);
    createGrid(size);
}

// Sets current mode to 'random color'
function randColor() {
    document.querySelector("#changeGrid").className = 'randColor';
}

// Sets current mode to 'gradient'
function gradient() {
    document.querySelector("#changeGrid").className = 'gradient';
}

// Sets current mode to 'black and white'
function blackWhite() {
    document.querySelector("#changeGrid").className = 'blackWhite';
}
function eraser() {
    document.querySelector("#changeGrid").className = 'eraser';
}

// Call function to create the pixel Grid
createGrid();