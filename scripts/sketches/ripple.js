x = y = 0;
maxSize = 200;
w = 2;
drawRipple = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  initCircle();
}

function draw() {
  background(0, 10);
  stroke(frameCount % 100, 50 + (frameCount % 100), 255);

  if (!drawRipple) {
    ellipse(x, y - 300 + (frameCount % 100) * 3, 2, 2);
  }

  if (frameCount % 100 === 0) {
    drawRipple = true;
  }

  if (drawRipple) {
    w = w > maxSize ? 0 : w + (frameCount % maxSize);
    ellipse(x, y, w, w / 2);
  }

  if (frameCount % (100 + maxSize) === 0) {
    drawRipple = false;
    initCircle();
  }
}

function initCircle() {
  x = random(0, width);
  y = random(0, height);
}
