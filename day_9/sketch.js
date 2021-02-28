//마우스가 움직였는지 체크해서 움직였으면 마우스의 가운데부터 원을 중첩해서 그려나감.

let radiusC,
  circleWidth = 0,
  circleWidthT = 0;

function setup() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer");
}

function windowResized() {
  radiusC = undefined;
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer");
}

function draw() {
  stroke(0);
  fill(255);

  if (radiusC === undefined) {
    radiusC = width * 3;
  }
  /**for (i = 0; i < radiusC; i = i + 40) {
    for (j = i; j > 0; j = j - 40) {
      circle(mouseX, mouseY, j);
    }
  }
  if (pmouseX - mouseX !== 0) {
    if (cicleWidth < radiusC) {
      cicleWidth = cicleWidth + 40;
      if (cicleWidth > 0) {
        cicleWidthT = cicleWidth;
        for (j = cicleWidthT; j > 0; j = j - 40) {
          let mapJ = map(j, 0, cicleWidthT, 0, 255);
          fill(mapJ);
          circle(mouseX, mouseY, j);
        }
        
      cicleWidthT = cicleWidthT - 40;
      circle(mouseX, mouseY, cicleWidth);
      
      }
    } else {
      cicleWidth = 0;
    }
  } else {
    cicleWidth = 0;
  }
  */
}

function mouseMoved() {
  background(255);
  if (circleWidth < radiusC) {
    circleWidth = circleWidth + 40;
    if (circleWidth > 0) {
      circleWidthT = circleWidth;
      for (i = circleWidthT; i > 0; i = i - 40) {
        push();
        let mapI = map(i, 0, circleWidthT, 0, 255);
        fill(mapI);
        circle(mouseX, mouseY, i);
        pop();
      }
    }
  }
}
