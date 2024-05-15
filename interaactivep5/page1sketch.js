let gifAnimation;
let leftClickCount = 0;
let agreedToProceed = false;
let clickSound; // Variable to hold the sound file

function preload() {
  // Preload the GIF
  gifAnimation = loadImage('haggig_1.gif');

  // Preload the sound file
  clickSound = loadSound('han.wav', soundLoaded);
}

// Callback function for when the sound is loaded
function soundLoaded() {
  console.log('Sound file loaded successfully');
}


function setup() {
  // Set canvas size to match window dimensions
  createCanvas(windowWidth, windowHeight);

  // Display a message prompting the user to click to agree
  let message = createDiv('Click to read the fairytale:)).');
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
    let message = select('div');
    message.hide();

    // Play the click sound
    clickSound.play();

    // Create an HTML <img> element to display the GIF
    image(gifAnimation, 0, 0, windowWidth, windowHeight);

    // Disable all keys
    disableKeys();
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

function disableKeys() {
  // Disable all keys
  document.onkeydown = function (event) {
    event.preventDefault();
  };
}
