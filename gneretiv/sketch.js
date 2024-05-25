// Define stroke alpha variables for circles
let strokeAlpha1, strokeAlpha2, strokeAlpha3, strokeAlpha4, strokeAlpha5, strokeAlpha6, strokeAlpha7, strokeAlpha8, strokeAlpha9, strokeAlpha10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let centerX = width / 2;
  let centerY = height / 2;

  // Generate random stroke alpha values for circles
  strokeAlpha1 = random(1, 5);
  strokeAlpha2 = random(1, 5);
  strokeAlpha3 = random(1, 5);
  strokeAlpha4 = random(1, 5);
  strokeAlpha5 = random(1, 5);
  strokeAlpha6 = random(1, 5);
  strokeAlpha7 = random(1, 5);
  strokeAlpha8 = random(1, 5);
  strokeAlpha9 = random(1, 5);
  strokeAlpha10 = random(1, 5);

  // Generate a wavy size for the additional circle
  let noiseVal = noise(frameCount * 0.02, frameCount * 0.01); // Adjust noise parameters for wave shape
  let wavyCircleSize = map(noiseVal, 0, 1, -5000, 5000); // Adjusted mapping for large waves

  // Draw the circles with strokes
  stroke(255, strokeAlpha1);
  noFill();
  ellipse(centerX, centerY, 5000);

  stroke(255, strokeAlpha2);
  ellipse(centerX, centerY, 600);

  stroke(255, strokeAlpha3);
  ellipse(centerX, centerY, 1000);

  stroke(255, strokeAlpha4);
  noFill();
  ellipse(centerX, centerY, centerY + wavyCircleSize); // Center the parabola on the centerY

  // Draw the additional circles
  let additionalCircleSize = 200; // Size of the additional circle
  let additionalCircleY = centerY; // Y position of the additional circle (middle of the canvas)
  let additionalCircleX = random(centerX - windowWidth, centerX + windowWidth); // Random X position within a range of the canvas width
  stroke(255, strokeAlpha5);
  noFill();
  ellipse(additionalCircleX, additionalCircleY, additionalCircleSize);

  let additionalCircleSize1 = 200; // Size of the additional circle
  let additionalCircleX1 = centerX; // X position of the additional circle (middle of the canvas)
  let additionalCircleY1 = random(centerY - windowHeight, centerY + windowHeight); // Random Y position within a range of the canvas height
  stroke(255, strokeAlpha6);
  noFill();
  ellipse(additionalCircleX1, additionalCircleY1, additionalCircleSize1);

  // Draw the larger additional circles
  let additionalCircleSize2 = additionalCircleSize * 2; // Double the size
  let additionalCircleY2 = centerY; // Y position of the additional circle (middle of the canvas)
  let additionalCircleX2 = random(centerX - windowWidth, centerX + windowWidth); // Random X position within a range of the canvas width
  stroke(255, strokeAlpha7);
  noFill();
  ellipse(additionalCircleX2, additionalCircleY2, additionalCircleSize2);

  let additionalCircleSize3 = additionalCircleSize1 * 2; // Double the size
  let additionalCircleX3 = centerX; // X position of the additional circle (middle of the canvas)
  let additionalCircleY3 = random(centerY - windowHeight, centerY + windowHeight); // Random Y position within a range of the canvas height
  stroke(255, strokeAlpha8);
  noFill();
  ellipse(additionalCircleX3, additionalCircleY3, additionalCircleSize3);

  // Draw the additional circles with fixed alpha
  let additionalCircleSize4 = 300; // Size of the additional circle
  let additionalCircleY4 = centerY; // Y position of the additional circle (middle of the canvas)
  let additionalCircleX4 = random(centerX - windowWidth, centerX + windowWidth); // Random X position within a range of the canvas width
  stroke(255, strokeAlpha9);
  noFill();
  ellipse(additionalCircleX4, additionalCircleY4, additionalCircleSize4);

  let additionalCircleSize5 = 300; // Size of the additional circle
  let additionalCircleX5 = centerX; // X position of the additional circle (middle of the canvas)
  let additionalCircleY5 = random(centerY - windowHeight, centerY + windowHeight); // Random Y position within a range of the canvas height
  stroke(255, strokeAlpha10);
  noFill();
  ellipse(additionalCircleX5, additionalCircleY5, additionalCircleSize5);

  // Draw the central black circle
  fill(0); 
  ellipse(centerX, centerY, 200); 

  // Draw the first square with fixed alpha
  let squareSize = random(0, min(windowWidth, windowHeight) / 3); // Random size up to one third of the canvas
  let squareX = random(width - squareSize); // Random X position
  let squareY = random(height - squareSize); // Random Y position
  stroke(255, strokeAlpha9); // Apply fixed stroke alpha
  noFill();
  rect(squareX, squareY, squareSize, squareSize); // Draw square

  // Draw the centered square with fixed alpha
  let centeredSquareSize = random(0, min(windowWidth, windowHeight) / 3); // Random size up to one third of the canvas
  let centeredSquareX = centerX - centeredSquareSize / 2; // Centered X position
  let centeredSquareY = centerY - centeredSquareSize / 2; // Centered Y position
  stroke(255, strokeAlpha10); // Apply fixed stroke alpha
  noFill();
  rect(centeredSquareX, centeredSquareY, centeredSquareSize, centeredSquareSize); // Draw centered square
}
let circleSize1 = 5000; 
let circleSize2 = 600;
let circleSize3 = 1000;
let wavyCircleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let centerX = width / 2;
  let centerY = height / 2;

  // Generate random sizes for the circles
  circleSize1 = random(1, 5000);
  circleSize2 = random(1, 600);
  circleSize3 = random(600, 1000);

  // Generate a wavy size for the additional circle
  let noiseVal = noise(frameCount * 0.02, frameCount * 0.01); // Adjust noise parameters for wave shape
  wavyCircleSize = map(noiseVal, 0, 1, -5000, 5000); // Adjusted mapping for large waves

  let strokeAlpha1 = random(1, 5);
  stroke(255, strokeAlpha1);
  noFill();
  ellipse(centerX, centerY, circleSize1);

  let strokeAlpha2 = random(1, 5);
  stroke(255, strokeAlpha2);
  ellipse(centerX, centerY, circleSize2);

  let strokeAlpha3 = random(1, 5);
  stroke(255, strokeAlpha3);
  ellipse(centerX, centerY, circleSize3);

  let strokeAlpha4 = random(1, 5);
  stroke(255, strokeAlpha4);
  noFill();
  ellipse(centerX, centerY, centerY + wavyCircleSize); // Center the parabola on the centerY

  // Draw the additional circles
  let additionalCircleSize = 200; // Size of the additional circle
  let additionalCircleY = centerY; // Y position of the additional circle (middle of the canvas)
  let additionalCircleX = random(centerX - windowWidth, centerX + windowWidth); // Random X position within a range of the canvas width
  let strokeAlpha5 = random(1, 5);
  stroke(255, strokeAlpha5);
  noFill();
  ellipse(additionalCircleX, additionalCircleY, additionalCircleSize);

  let additionalCircleSize1 = 200; // Size of the additional circle
  let additionalCircleX1 = centerX; // X position of the additional circle (middle of the canvas)
  let additionalCircleY1 = random(centerY - windowHeight, centerY + windowHeight); // Random Y position within a range of the canvas height
  let strokeAlpha6 = random(1, 5);
  stroke(255, strokeAlpha6);
  noFill();
  ellipse(additionalCircleX1, additionalCircleY1, additionalCircleSize1);

  // Draw the larger additional circles
  let additionalCircleSize2 = additionalCircleSize * 2; // Double the size
  let additionalCircleY2 = centerY; // Y position of the additional circle (middle of the canvas)
  let additionalCircleX2 = random(centerX - windowWidth, centerX + windowWidth); // Random X position within a range of the canvas width
  let strokeAlpha7 = random(1, 5);
  stroke(255, strokeAlpha7);
  noFill();
  ellipse(additionalCircleX2, additionalCircleY2, additionalCircleSize2);

  let additionalCircleSize3 = additionalCircleSize1 * 2; // Double the size
  let additionalCircleX3 = centerX; // X position of the additional circle (middle of the canvas)
  let additionalCircleY3 = random(centerY - windowHeight, centerY + windowHeight); // Random Y position within a range of the canvas height
  let strokeAlpha8 = random(1, 5);
  stroke(255, strokeAlpha8);
  noFill();
  ellipse(additionalCircleX3, additionalCircleY3, additionalCircleSize3);

  // Draw the additional circles
let additionalCircleSize4 = 300; // Size of the additional circle
let additionalCircleY4 = centerY; // Y position of the additional circle (middle of the canvas)
let additionalCircleX4 = random(centerX - windowWidth, centerX + windowWidth); // Random X position within a range of the canvas width
let strokeAlpha9 = random(1, 5);
stroke(255, strokeAlpha9);
noFill();
ellipse(additionalCircleX4, additionalCircleY4, additionalCircleSize4);

let additionalCircleSize5 = 300; // Size of the additional circle
let additionalCircleX5 = centerX; // X position of the additional circle (middle of the canvas)
let additionalCircleY5 = random(centerY - windowHeight, centerY + windowHeight); // Random Y position within a range of the canvas height
let strokeAlpha10 = random(1, 5);
stroke(255, strokeAlpha10);
noFill();
ellipse(additionalCircleX5, additionalCircleY5, additionalCircleSize5);


  // Draw the central black circle
  fill(0); 
  ellipse(centerX, centerY, 200); 

  // Draw the first square
  let squareSize = random(0, min(windowWidth, windowHeight) / 3); // Random size up to one third of the canvas
  let squareX = random(width - squareSize); // Random X position
  let squareY = random(height - squareSize); // Random Y position
  let strokeAlpha11 = random(1, 5); // Random stroke alpha for the square
  stroke(255, strokeAlpha11); // Apply stroke
  noFill();
  rect(squareX, squareY, squareSize, squareSize); // Draw square

  // Draw the centered square
  let centeredSquareSize = random(0, min(windowWidth, windowHeight) / 3); // Random size up to one third of the canvas
  let centeredSquareX = centerX - centeredSquareSize / 2; // Centered X position
  let centeredSquareY = centerY - centeredSquareSize / 2; // Centered Y position
  let strokeAlpha12 = random(1, 5); // Random stroke alpha for the centered square
  stroke(255, strokeAlpha11); // Apply stroke
  noFill();
  rect(centeredSquareX, centeredSquareY, centeredSquareSize, centeredSquareSize); // Draw centered square
}