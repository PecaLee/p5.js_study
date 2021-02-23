let line = 0;

function setup() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer");
  background(0);
}

function windowResized() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer");
}

function draw() {
  stroke(0);
  strokeWeight(2);
  noFill();
  line = line + 10;
  if (line > width * 2) {
    line = 0;
    background(255);
  }
  circle(mouseX, mouseY, line);
}
