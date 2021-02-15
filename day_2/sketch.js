let sdColor;
let IsMousePressed = 10;

function setup() {
  let canvasOne = createCanvas(windowWidth, 600);
  canvasOne.parent("processingContainer"); //html div의 id를 가져와서 div안에 canvas를 만듬
  background(100);
  drawingContext.shadowBlur = 10;
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    sdColor = "#f2f2f2";
    drawingContext.shadowColor = sdColor;
    if (100 > IsMousePressed > 0) {
      ++IsMousePressed;
    } else {
      IsMousePressed = 10;
    }
  } else {
    sdColor = "black";
    drawingContext.shadowColor = sdColor;
    if (IsMousePressed > 11) {
      --IsMousePressed;
    } else {
      IsMousePressed = 10;
    }
  }
  ellipse(mouseX, mouseY, IsMousePressed);
}
