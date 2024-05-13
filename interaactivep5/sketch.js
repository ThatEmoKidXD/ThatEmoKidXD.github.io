let backgroundImage;

// Define positions and sizes for rectangles
let rectWidth, rectHeight;
let rect1X, rect1Y;
let rect2X, rect2Y;
let rect3X, rect3Y;

function preload() {
  // Load your image in the preload function
  backgroundImage = loadImage('story4.png');
}

function setup() {
  // Set canvas size to match image dimensions
  createCanvas(backgroundImage.width, backgroundImage.height);

  // Define positions and sizes for each rectangle
  rectWidth = width / 4;
  rectHeight = height / 4;
  let offsetY = height / 4; // Vertical offset for the top rectangles
  rect1X = width / 2 - rectWidth / 2;
  rect1Y = height / 2 + height / 8; // Bottom rectangle
  rect2X = width / 4 - rectWidth / 2;
  rect2Y = height / 8; // Left top rectangle
  rect3X = 3 * width / 4 - rectWidth / 2;
  rect3Y = height / 8; // Right top rectangle
}

function draw() {
  // Set the background to the loaded image
  background(backgroundImage);

  // Check if the mouse is over any rectangle
  if (
    mouseX > rect1X && mouseX < rect1X + rectWidth && 
    mouseY > rect1Y && mouseY < rect1Y + rectHeight
  ) {
    cursor(HAND); // Change cursor to a hand
  } else if (
    mouseX > rect2X && mouseX < rect2X + rectWidth && 
    mouseY > rect2Y && mouseY < rect2Y + rectHeight
  ) {
    cursor(HAND); // Change cursor to a hand
  } else if (
    mouseX > rect3X && mouseX < rect3X + rectWidth && 
    mouseY > rect3Y && mouseY < rect3Y + rectHeight
  ) {
    cursor(HAND); // Change cursor to a hand
  } else {
    cursor(ARROW); // Reset cursor to default
  }

  // Draw clickable areas (rectangles) on the canvas
  fill(255, 0, 0, 100); // semi-transparent red
  rect(rect1X, rect1Y, rectWidth, rectHeight); // Bottom rectangle
  rect(rect2X, rect2Y, rectWidth, rectHeight); // Left top rectangle
  rect(rect3X, rect3Y, rectWidth, rectHeight); // Right top rectangle
}

function mouseClicked() {
  // Check if the mouse is inside any rectangle and navigate accordingly
  if (
    mouseX > rect1X && mouseX < rect1X + rectWidth && 
    mouseY > rect1Y && mouseY < rect1Y + rectHeight
  ) {
    // Clicked on the bottom rectangle
    window.location.href = 'page1.html'; // Replace 'page1.html' with your desired URL
  } else if (
    mouseX > rect2X && mouseX < rect2X + rectWidth && 
    mouseY > rect2Y && mouseY < rect2Y + rectHeight
  ) {
    // Clicked on the left top rectangle
    window.location.href = 'page2.html'; // Replace 'page2.html' with your desired URL
  } else if (
    mouseX > rect3X && mouseX < rect3X + rectWidth && 
    mouseY > rect3Y && mouseY < rect3Y + rectHeight
  ) {
    // Clicked on the right top rectangle
    window.location.href = 'page3.html'; // Replace 'page3.html' with your desired URL
  }
}
