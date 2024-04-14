
let userHasClicked = false;

let creepSound;
let moistSound;

let circleCreepX;
let circleCreepY;

let circleMoistX;
let circleMoistY;

function preload() {
  
  

  creepSound = loadSound('assets/creep.wav');
  moistSound = loadSound('assets/moist.wav');
  
}

function setup() {
  
  
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
  
  
}


function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER)
  creepSound.setVolume()
  circleCreepX = random(width);
  circleCreepY = random(height);

  
  circleMoistX = random(width);
  circleMoistY = random(height);
 
}

function draw() {

  background('red')
  //circle(circleX, circleY, 50)
  if(userHasClicked == false){
  text('Click to start the dududdudu', width/2, height/2)
  }
  else{
    if(creepSound.isPlaying() ==false){
      creepSound.play();
    }
    let distanceCreep = dist(mouseX, mouseY, circleCreepX, circleCreepY)

    let volumeCreep = map(
      distanceCreep, 0, 200, 1, 0);
       volumeCreep = constrain(volumeCreep,0,1);
        creepSound.setVolume(volumeCreep);



    if(moistSound.isPlaying() ==false){
      moistSound.play();
    }
    let distanceMoist = dist(mouseX, mouseY, circleMoistX, circleMoistY)

    let volumeMoist = map(
      distanceMoist, 0, 200, 1, 0);
       volumeMoist = constrain(volumeMoist,0,1);
    
      
    moistSound.setVolume(volumeMoist);
  }

}

function mouseClicked(){
  userHasClicked = true;

}