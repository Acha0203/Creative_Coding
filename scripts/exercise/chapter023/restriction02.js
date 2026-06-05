const unit = 60;
let px, py;

function setup() {
  createCanvas(windowWidth, windowHeight);

  px = 0;
  py = 0;
}

function draw() {
  const x = floor(mouseX / unit) * unit;
  const y = floor(mouseY / unit) * unit;

  if (px == x && py == y) {
    return;
  }

  fill(random(256));
  circle(x, y, unit);

  px = x;
  py = y;
}
