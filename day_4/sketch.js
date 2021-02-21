let mySound, amplitude;
let fr = 24;

function preload() {
  soundFormats("mp3");
  mySound = loadSound("Sunny Travel - Nico Staf.mp3");
}

function setup() {
  frameRate(fr);
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer"); //html div의 id를 가져와서 div안에 canvas를 만듬
  canvasOne.mousePressed(canvasPressed);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(20);
  noStroke();
  let level = amplitude.getLevel();
  let mappedSizeOne = map(level, 0, 1, 30, 30000, true);
  let mappedSizeTwo = map(level, 0, 1, 10, 500);

  fill(51);
  ellipse(width / 2, height / 2, mappedSizeOne);
  for (let i = 0; i < 30; i++) {
    let mappedColor = map(i, 0, 29, 0, 255);
    fill(mappedColor / 3, mappedColor, mappedSizeTwo);
    ellipse(width / 2, height / 2, mappedSizeOne / i);
  }
}

function toggleSound() {
  if (mySound.isPlaying()) {
    mySound.stop();
  } else {
    mySound.play();
  }
}

function canvasPressed() {
  toggleSound();
}
