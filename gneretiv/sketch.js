let strokeAlpha1, strokeAlpha2, strokeAlpha3, strokeAlpha4, strokeAlpha5, strokeAlpha6, strokeAlpha7, strokeAlpha8, strokeAlpha9, strokeAlpha10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let centerX = width / 2;
  let centerY = height / 2;

  // Generate random stroke alpha values for circles
  strokeAlpha1 = random(1, 10); // Adjusted for better visibility
  strokeAlpha2 = random(1, 10);
  strokeAlpha3 = random(1, 10);
  strokeAlpha4 = random(1, 10);
  strokeAlpha5 = random(1, 10);
  strokeAlpha6 = random(1, 10);
  strokeAlpha7 = random(1, 10);
  strokeAlpha8 = random(1, 10);
  strokeAlpha9 = random(1, 10);
  strokeAlpha10 = random(1, 10);

  // Generate a wavy size for the additional circle
  let noiseVal = noise(frameCount * 0.02, frameCount * 0.01); // Adjust noise parameters for wave shape
  let wavyCircleSize = map(noiseVal, 0, 1, -5000, 5000); // Adjusted mapping for large waves

  // Generate random sizes for the circles
  let circleSize1 = random(1, 5000);
  let circleSize2 = random(1, 600);
  let circleSize3 = random(600, 1000);

  // Draw the circles with strokes
  stroke(255, strokeAlpha1);
  noFill();
  ellipse(centerX, centerY, circleSize1);

  stroke(255, strokeAlpha2);
  ellipse(centerX, centerY, circleSize2);

  stroke(255, strokeAlpha3);
  ellipse(centerX, centerY, circleSize3);

  stroke(255, strokeAlpha4);
  noFill();
  ellipse(centerX, centerY, centerY + wavyCircleSize); // Center the parabola on the centerY

  // Draw the additional circles
  let additionalCircleSize = 200; // Size of the additional circle
  let additionalCircleY = centerY; // Y position of the additional circle (middle of the canvas)
  let additionalCircleX = random(centerX - windowWidth / 2, centerX + windowWidth / 2); // Random X position within a range of the canvas width
  stroke(255, strokeAlpha5);
  noFill();
  ellipse(additionalCircleX, additionalCircleY, additionalCircleSize);

  let additionalCircleSize1 = 200; // Size of the additional circle
  let additionalCircleX1 = centerX; // X position of the additional circle (middle of the canvas)
  let additionalCircleY1 = random(centerY - windowHeight / 2, centerY + windowHeight / 2); // Random Y position within a range of the canvas height
  stroke(255, strokeAlpha6);
  noFill();
  ellipse(additionalCircleX1, additionalCircleY1, additionalCircleSize1);

  // Draw the larger additional circles
  let additionalCircleSize2 = additionalCircleSize * 2; // Double the size
  let additionalCircleY2 = centerY; // Y position of the additional circle (middle of the canvas)
  let additionalCircleX2 = random(centerX - windowWidth / 2, centerX + windowWidth / 2); // Random X position within a range of the canvas width
  stroke(255, strokeAlpha7);
  noFill();
  ellipse(additionalCircleX2, additionalCircleY2, additionalCircleSize2);

  let additionalCircleSize3 = additionalCircleSize1 * 2; // Double the size
  let additionalCircleX3 = centerX; // X position of the additional circle (middle of the canvas)
  let additionalCircleY3 = random(centerY - windowHeight / 2, centerY + windowHeight / 2); // Random Y position within a range of the canvas height
  stroke(255, strokeAlpha8);
  noFill();
  ellipse(additionalCircleX3, additionalCircleY3, additionalCircleSize3);

  // Draw the additional circles with fixed alpha
  let additionalCircleSize4 = 300; // Size of the additional circle
  let additionalCircleY4 = centerY; // Y position of the additional circle (middle of the canvas)
  let additionalCircleX4 = random(centerX - windowWidth / 2, centerX + windowWidth / 2); // Random X position within a range of the canvas width
  stroke(255, strokeAlpha9);
  noFill();
  ellipse(additionalCircleX4, additionalCircleY4, additionalCircleSize4);

  let additionalCircleSize5 = 300; // Size of the additional circle
  let additionalCircleX5 = centerX; // X position of the additional circle (middle of the canvas)
  let additionalCircleY5 = random(centerY - windowHeight / 2, centerY + windowHeight / 2); // Random Y position within a range of the canvas height
  stroke(255, strokeAlpha10);
  noFill();
  ellipse(additionalCircleX5, additionalCircleY5, additionalCircleSize5);

  

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

  let additionalCircleSize6 = 300; // Size of the additional circle
  let additionalCircleY6 = random(centerY - windowHeight, centerY + windowHeight); // Random Y position within a range of the canvas height
  let additionalCircleX6 = map(additionalCircleY6, centerY - windowHeight, centerY + windowHeight, centerX - windowWidth, centerX + windowWidth); // Corresponding X position to create diagonal effect
  stroke(255, strokeAlpha9);
  noFill();
  ellipse(additionalCircleX6, additionalCircleY6, additionalCircleSize6);

  let additionalCircleSize7 = 300; // Size of the additional circle
  let additionalCircleY7 = random(centerY - windowHeight, centerY + windowHeight); // Random Y position within a range of the canvas height
  let additionalCircleX7 = map(additionalCircleY7, centerY - windowHeight, centerY + windowHeight, centerX + windowWidth, centerX - windowWidth); // Corresponding X position to create diagonal effect
  stroke(255, strokeAlpha10);
  noFill();
  ellipse(additionalCircleX7, additionalCircleY7, additionalCircleSize7);

  let additionalCircleSize8 = 300;
  let additionalCircleY8 = random(centerY - windowHeight, centerY + windowHeight);
  let additionalCircleX8 = map(additionalCircleY8, centerY - windowHeight, centerY + windowHeight, centerX - windowWidth, centerX + windowWidth);
  let distanceFromCenter8 = dist(centerX, centerY, additionalCircleX8, additionalCircleY8);
  additionalCircleSize8 += distanceFromCenter8 * 0.1; // Increase size based on distance
  stroke(255, strokeAlpha9);
  noFill();
  ellipse(additionalCircleX8, additionalCircleY8, additionalCircleSize8);

  let additionalCircleSize9 = 300;
  let additionalCircleY9 = random(centerY - windowHeight, centerY + windowHeight);
  let additionalCircleX9 = map(additionalCircleY9, centerY - windowHeight, centerY + windowHeight, centerX + windowWidth, centerX - windowWidth);
  let distanceFromCenter9 = dist(centerX, centerY, additionalCircleX9, additionalCircleY9);
  additionalCircleSize9 += distanceFromCenter9 * 0.1; // Increase size based on distance
  stroke(255, strokeAlpha10);
  noFill();
  ellipse(additionalCircleX9, additionalCircleY9, additionalCircleSize9);
  // Draw horizontal circles with sizes based on distance from the center
  for (let i = 0; i < 10; i++) {
    let additionalCircleSizeH = 300;
    let additionalCircleXH = random(centerX - windowWidth, centerX + windowWidth);
    let distanceFromCenterH = abs(additionalCircleXH - centerX);
    additionalCircleSizeH += distanceFromCenterH * 0.1; // Increase size based on distance
    stroke(255, random(1, 10));
    noFill();
    ellipse(additionalCircleXH, centerY, additionalCircleSizeH);
  }

  // Draw vertical circles with sizes based on distance from the center
  for (let i = 0; i < 10; i++) {
    let additionalCircleSizeV = 300;
    let additionalCircleYV = random(centerY - windowHeight, centerY + windowHeight);
    let distanceFromCenterV = abs(additionalCircleYV - centerY);
    additionalCircleSizeV += distanceFromCenterV * 0.1; // Increase size based on distance
    stroke(255, random(1, 10));
    noFill();
    ellipse(centerX, additionalCircleYV, additionalCircleSizeV);

  }
  for (let i = 0; i < 10; i++) {
    let additionalCircleSizeV = 300;
    let additionalCircleYV = random(centerY - windowHeight, centerY + windowHeight);
    let distanceFromCenterV = abs(additionalCircleYV - centerY);
    additionalCircleSizeV -= distanceFromCenterV * 0.1; // Decrease size based on distance
    stroke(255, random(1, 10));
    noFill();
    ellipse(centerX, additionalCircleYV, additionalCircleSizeV);
  }
  // Draw horizontal circles with sizes based on distance from the center
for (let i = 0; i < 10; i++) {
  let additionalCircleSizeH = 300;
  let additionalCircleXH = random(centerX - windowWidth, centerX + windowWidth);
  let distanceFromCenterH = abs(additionalCircleXH - centerX);
  additionalCircleSizeH -= distanceFromCenterH * 0.1; // Decrease size based on distance
  stroke(255, random(1, 10));
  noFill();
  ellipse(additionalCircleXH, centerY, additionalCircleSizeH);
}
// Draw diagonal circles that get smaller when they are further from the center
for (let i = 0; i < 10; i++) {
  let additionalCircleSizeD = 300;
  // Calculate diagonal distance from center
  let dx = width / 10 * i - centerX;
  let dy = height / 10 * i - centerY;
  let distanceFromCenterD = sqrt(dx * dx + dy * dy);
  additionalCircleSizeD -= distanceFromCenterD * 0.1; // Decrease size based on distance
  stroke(255, random(1, 10));
  noFill();
  ellipse(centerX, centerY, additionalCircleSizeD);
}

  // Draw the central black circle
  fill(0); 
  ellipse(centerX, centerY, 200); 
  

  
  
}
