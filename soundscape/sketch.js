let riverSound;

let userHasClicked = false;

function preload() {
  
  riverSound = loadSound('assets/river.wav');
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
  riverSound.setVolume()
 
}

function draw() {

  background('hotpink');
  if(userHasClicked == false){
  text('Click to start the dududdudu', width/2, height/2)
  }
  else{
    if(riverSound.isPlaying() ==false){
      riverSound.play();
    }
    
    let targetVolume = map(
      mouseX,
      0,
      width,
      0,
      1
    )
    riverSound.setVolume(targetVolume)
  }

}

function mouseClicked(){
  userHasClicked = true;

}