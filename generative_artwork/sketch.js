let strokeAlpha1, strokeAlpha2, strokeAlpha3, strokeAlpha4, strokeAlpha5, strokeAlpha6, strokeAlpha7, strokeAlpha8, strokeAlpha9, strokeAlpha10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let centerX = width / 2;
  let centerY = height / 2;

  
  strokeAlpha1 = random(1, 10); 
  strokeAlpha2 = random(1, 10);
  strokeAlpha3 = random(1, 10);
  strokeAlpha4 = random(1, 10);
  strokeAlpha5 = random(1, 10);
  strokeAlpha6 = random(1, 10);
  strokeAlpha7 = random(1, 10);
  strokeAlpha8 = random(1, 10);
  strokeAlpha9 = random(1, 10);
  strokeAlpha10 = random(1, 10);

  
  for (let i = 0; i < 10; i++) {
    let additionalCubeSizeH = 300;
    let additionalCubeXH = random(centerX - windowWidth, centerX + windowWidth);
    let distanceFromCenterH = abs(additionalCubeXH - centerX);
    additionalCubeSizeH += distanceFromCenterH * 0.1; 
    stroke(255, random(1, 10));
    noFill();
    rect(additionalCubeXH, centerY, additionalCubeSizeH, additionalCubeSizeH);
  }

  
  for (let i = 0; i < 10; i++) {
    let additionalCubeSizeV = 300;
    let additionalCubeYV = random(centerY - windowHeight, centerY + windowHeight);
    let distanceFromCenterV = abs(additionalCubeYV - centerY);
    additionalCubeSizeV += distanceFromCenterV * 0.1; 
    stroke(255, random(1, 10));
    noFill();
    rect(centerX, additionalCubeYV, additionalCubeSizeV, additionalCubeSizeV);
  }

  
  for (let i = 0; i < 10; i++) {
    let additionalCubeSizeD = 300;
    
    let dx = width / 10 * i - centerX;
    let dy = height / 10 * i - centerY;
    let distanceFromCenterD = sqrt(dx * dx + dy * dy);
    additionalCubeSizeD += distanceFromCenterD * 0.1; 
    stroke(255, random(1, 10));
    noFill();
    rect(centerX, centerY, additionalCubeSizeD, additionalCubeSizeD);
  }

  
  for (let i = 0; i < 10; i++) {
    let additionalCircleSizeH = 300;
    let additionalCircleXH = random(centerX - windowWidth, centerX + windowWidth);
    let distanceFromCenterH = abs(additionalCircleXH - centerX);
    additionalCircleSizeH += distanceFromCenterH * 0.1; 
    stroke(255, random(1, 10));
    noFill();
    ellipse(additionalCircleXH, centerY, additionalCircleSizeH);
  }

  
  for (let i = 0; i < 10; i++) {
    let additionalCircleSizeV = 300;
    let additionalCircleYV = random(centerY - windowHeight, centerY + windowHeight);
    let distanceFromCenterV = abs(additionalCircleYV - centerY);
    additionalCircleSizeV += distanceFromCenterV * 0.1; 
    stroke(255, random(1, 10));
    noFill();
    ellipse(centerX, additionalCircleYV, additionalCircleSizeV);
  }

  
  for (let i = 0; i < 10; i++) {
    let additionalCircleSizeV = 300;
    let additionalCircleYV = random(centerY - windowHeight, centerY + windowHeight);
    let distanceFromCenterV = abs(additionalCircleYV - centerY);
    additionalCircleSizeV -= distanceFromCenterV * 0.1; 
    stroke(255, random(1, 10));
    noFill();
    ellipse(centerX, additionalCircleYV, additionalCircleSizeV);
  }

  
  for (let i = 0; i < 10; i++) {
    let additionalCircleSizeH = 300;
    let additionalCircleXH = random(centerX - windowWidth, centerX + windowWidth);
    let distanceFromCenterH = abs(additionalCircleXH - centerX);
    additionalCircleSizeH -= distanceFromCenterH * 0.1; 
    stroke(255, random(1, 10));
    noFill();
    ellipse(additionalCircleXH, centerY, additionalCircleSizeH);
  }

 
  for (let i = 0; i < 10; i++) {
    let additionalCircleSizeD = 300;
    
    let dx = width / 10 * i - centerX;
    let dy = height / 10 * i - centerY;
    let distanceFromCenterD = sqrt(dx * dx + dy * dy);
    additionalCircleSizeD -= distanceFromCenterD * 0.1; 
    stroke(255, random(1, 10));
    noFill();
    ellipse(centerX, centerY, additionalCircleSizeD);
  }

  
  fill(0);
  ellipse(centerX, centerY, 200);
}


function keyPressed() {
  if (key === ' ') {
    saveCanvas('myArtwork', 'png');
  }
}
