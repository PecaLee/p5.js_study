let mouthHeight = 0;

function setup() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer");
  background(0);
}

function windowResized() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer");
  background(0);
}

function draw() {
  background(0);
  stroke(0);
  let mappedMouseX = map(mouseX, 0, width, width / 2 - 80, width / 2 + 80);
  let mappedMouseY = map(mouseY, 0, height, height / 2 - 80, height / 2 + 80);

  push();
  fill(255);
  translate(width / 2, height / 2);
  circle(0, 0, 200);
  pop();

  push();
  fill(0);
  noStroke();
  translate(mappedMouseX, mappedMouseY);
  circle(0, 0, 80);
  pop();

  push();
  fill(255);
  noStroke();
  translate(width / 2, height / 2 + 150);
  ellipse(0, 0, 100, mouthHeight);
  pop();
}

function mouseMoved() {
  mouthHeight = random(2, 30);
}
