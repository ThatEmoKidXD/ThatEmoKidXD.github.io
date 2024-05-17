let gifAnimation;
let leftClickCount = 0;
let agreedToProceed = false;
let mySound; // Variable to hold the sound file

function preload() {
  // Preload the sound file
  mySound = loadSound('han.wav');
}

function setup() {
  // Set canvas size to match window dimensions
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Prevent draw loop since we're not using it

  // Display a message prompting the user to click to agree
  let message = createDiv('Click to read the fairytale:)).');
  message.id('message');
  message.style('position', 'fixed');
  message.style('top', '50%');
  message.style('left', '50%');
  message.style('transform', 'translate(-50%, -50%)'); // Center the message
  message.style('color', 'red');
  message.style('font-size', '18px');
  message.style('text-align', 'center'); // Align the text to center
}

function mouseClicked() {
  // Check if the user has agreed to proceed
  if (!agreedToProceed) {
    // Set the agreedToProceed flag to true
    agreedToProceed = true;

    // Hide the message
    let message = select('#message');
    message.hide();

    // Enter fullscreen mode
    let fs = fullscreen();
    fullscreen(!fs);

    // Create an HTML <img> element to display the GIF
    gifAnimation = createImg('haggig_1.gif', 'gif image', '', gifLoaded);
  } else {
    // Check if the left mouse button is clicked
    if (mouseButton === LEFT) {
      // Increment left click count
      leftClickCount++;

      // Check if left click count is 10
      if (leftClickCount >= 10) {
        // Reset left click count
        leftClickCount = 0;
        // Redirect to the main page
        window.location.href = 'index.html'; // Replace 'index.html' with your main page URL
      }
    }
  }
}

function gifLoaded() {
  // Resize the GIF to fit the window
  gifAnimation.size(windowWidth, windowHeight);
  gifAnimation.position(0, 0); // Position the GIF at the top-left corner of the canvas

  // Play the sound
  mySound.loop();

  // Disable all keys
  disableKeys();
}

function disableKeys() {
  // Disable all keys
  document.onkeydown = function(event) {
    event.preventDefault();
  };
}

function windowResized() {
  // Resize the canvas to match the window dimensions
  resizeCanvas(windowWidth, windowHeight);

  // Resize the GIF to fit the window
  if (gifAnimation) {
    gifAnimation.size(windowWidth, windowHeight);
  }
}
