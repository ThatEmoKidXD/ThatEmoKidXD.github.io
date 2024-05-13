let gifAnimation;
let leftClickCount = 0;
let agreedToProceed = false;

function preload() {
  // No need to preload the GIF since it's already loaded
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

    // Create an HTML <img> element to display the GIF
    gifAnimation = createImg('haggig_1.gif', 'gif image', '', imageLoaded);
    //gifAnimation.hide(); // Hide initially until loaded
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

function imageLoaded() {
 
  // Calculate scaling factors for width and height
  let scaleX = windowWidth / gifAnimation.width;
  let scaleY = windowHeight / gifAnimation.height;
  let scaleFactor = max(scaleX, scaleY); // Use max to ensure the GIF covers the entire canvas

  // Resize the GIF to fit the window
  gifAnimation.size(gifAnimation.width * scaleFactor, gifAnimation.height * scaleFactor);

  // Position the GIF at the top-left corner of the canvas
  gifAnimation.position(0, 0);
  fullscreen(true);
  // Disable all keys
  disableKeys();
}

function disableKeys() {
  // Disable all keys
  document.onkeydown = function (event) {
    event.preventDefault();
  };
}