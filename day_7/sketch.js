//마우스가 움직였는지 체크해서 움직였으면 마우스의 가운데부터 원을 중첩해서 그려나감.

let radiusC,
  cicleWidth = 0,
  cicleWidthT = 0;

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
  if (radiusC === undefined) {
    radiusC = width * 2;
  }
  /**for (i = 0; i < radiusC; i = i + 40) {
    for (j = i; j > 0; j = j - 40) {
      circle(mouseX, mouseY, j);
    }
  }*/
  if (cicleWidth < radiusC) {
    cicleWidth = cicleWidth + 40;
    if (cicleWidth > 0) {
      cicleWidthT = cicleWidth;
      for (j = cicleWidthT; j > 0; j = j - 40) {
        circle(mouseX, mouseY, j);
      }
      /** 
      cicleWidthT = cicleWidthT - 40;
      circle(mouseX, mouseY, cicleWidth);
      */
    }
  } else {
    cicleWidth = 0;
  }
}
