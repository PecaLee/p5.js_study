let line;

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
  strokeWeight(4);
  fill(255);
  if ((line === undefined) | (line < 0)) {
    line = width * 2;
    if (line > 0) {
      line = line - 30;
    }
  } else {
    if (line > 0) {
      line = line - 30;
    }
  }
  circle(mouseX, mouseY, line);
}
