function setup() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer");
  background(255);
}

function windowResized() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer");
  background(255);
}

function draw() {
  stroke(0);
  strokeWeight(2);
  noFill();
  circle(mouseX, mouseY, 200);
}
