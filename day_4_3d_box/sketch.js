let mySound, amplitude;
let boxSize;
let fr = 30;

function preload() {
  soundFormats("mp3");
  mySound = loadSound("../day_4/Sunny Travel - Nico Staf.mp3");
}

function setup() {
  frameRate(fr);
  let canvasOne = createCanvas(windowWidth, windowHeight, WEBGL);
  canvasOne.parent("processingContainer"); //html div의 id를 가져와서 div안에 canvas를 만듬
  canvasOne.mousePressed(canvasPressed);
  amplitude = new p5.Amplitude();
}

function windowResized() {
  let canvasOne = createCanvas(windowWidth, windowHeight, WEBGL);
  canvasOne.parent("processingContainer"); //html div의 id를 가져와서 div안에 canvas를 만듬
  canvasOne.mousePressed(canvasPressed);
}

function draw() {
  background(10);

  let level = amplitude.getLevel();
  let mappedLevel = map(level, 0, 1, 10, 50);
  let rotateRate = map(level, 0, 1, 0.01, 0.015);
  let boxDistance = map(level, 0, 1, 1, 5);

  push();
  translate(-width / 2, -height / 2, -500);
  noStroke();
  for (let i = 0; i < 30; i++) {
    let mappedColor = map(i, 0, 29, 0, 255);
    fill(mappedColor / 3, mappedColor, mappedColor);
    ellipse(width / 2, height / 2, 2000 / i);
  }
  pop();

  let rotateSpeed = frameCount * rotateRate;
  rotateZ(rotateSpeed);
  rotateX(rotateSpeed);
  rotateY(rotateSpeed);

  fill(11, 150, 35, 100);
  stroke(255);

  push();
  translate(-150 * boxDistance, -150 * boxDistance, -150 * boxDistance);
  for (let i = 0; i < 301; i = i + 50) {
    for (let j = 0; j < 301; j = j + 50) {
      for (let k = 0; k < 301; k = k + 50) {
        push();
        translate(i * boxDistance, j * boxDistance, k * boxDistance);
        box(mappedLevel);
        pop();
      }
    }
  }
  pop();
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
