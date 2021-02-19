let x;
let y;
let sx;
let sy;
let sizeSwitch = false;
let easing = 0.05;

function setup() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer"); //html div의 id를 가져와서 div안에 canvas를 만듬
  x = 1;
  y = 1;
  sx = 1;
  sy = 1;
}

function windowResized() {
  let canvasOne = createCanvas(windowWidth, windowHeight);
  canvasOne.parent("processingContainer"); //html div의 id를 가져와서 div안에 canvas를 만듬
  x = 1;
  y = 1;
  sx = 1;
  sy = 1;
}

function draw() {
  noStroke();
  background(200);

  if (sizeSwitch === false) {
    ++sx;
    ++sy;
    if (sx === 200) {
      sizeSwitch = true;
    }
  } else {
    --sx;
    --sy;
    if (sx === 0) {
      sizeSwitch = false;
    }
  }

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  console.log(sx);
  ellipse(x, y, sx, sy);
}
