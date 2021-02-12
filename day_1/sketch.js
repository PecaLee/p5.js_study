const fr = 60;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  noFill();
  frameRate(fr);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  noFill();
  frameRate(fr);
}

let i = 0;
let drawBox;

function draw() {
  translate(mouseX - windowWidth / 2, mouseY - windowHeight / 2, 0);
  if (i === 5) {
    i = 0;
    background(0);
  } else {
    ++i;
  }
  strokeWeight(random(0.5, 1));
  stroke(random(100, 255), random(100, 255), random(100, 255));
  rotateX(frameCount * 1.2);
  rotateY(frameCount * 1.2);
  const randomBox = random(0, windowHeight / 10);
  drawBox = box(randomBox, randomBox, randomBox);
}
