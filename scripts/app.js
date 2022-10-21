let r, x, s;

function setup() {
  createCanvas(windowWidth, windowHeight);

  r = min(width, height) / 6;
  x = r;
  s = "0";
}

function draw() {
  x += 10;
  if (x > width + r) {
    x = -r;
  }

  clear();
  circle(x, height / 2, r * 2);

  if (frameCount % 30 === 0) {
    s = frameRate().toFixed(0);
  }

  push();
  noStroke();
  fill(240);
  text(s, 20, 20);
  pop();
}
