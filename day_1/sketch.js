function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(random(0, 100), random(0, 100), random(0, 100));
  noFill();
}

function windowResized() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(random(0, 100), random(0, 100), random(0, 100));
  noFill();
}

let i = 0;

function draw() {
  strokeWeight(random(1, 3));
  stroke(random(100, 255), random(100, 255), random(100, 255));
  if (i === 5) {
    i = 0;
    background(random(0, 30), random(0, 30), random(0, 30));
  } else {
    ++i;
  }
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  //translate(mouseX - 200, mouseY - 200);
  const randomBox = random(0, windowHeight / 2);
  box(randomBox, randomBox, randomBox);
}
