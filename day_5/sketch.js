let soundFile;
let rectLocX = 0,
  rectLocY = 0,
  colorX = 0;

function preload() {
  soundFormats("mp3");
  soundFile = loadSound("Meet & Fun! - Ofshane.mp3");
}

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
  noStroke();
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 3; j++) {
      colorX++;
      if (colorX === 12) {
        colorX = 0;
      }
      let mappedColor = map(colorX, 0, 11, 0, 255);
      push();
      fill(mappedColor, 0, 255);
      rect(rectLocX, rectLocY, width / 4, height / 3);
      pop();
      rectLocY = rectLocY + height / 3;
      if (rectLocY > height) {
        rectLocY = 0;
      }
    }
    rectLocX = rectLocX + width / 4;
    if (rectLocX > width) {
      rectLocX = 0;
    }
  }
}
