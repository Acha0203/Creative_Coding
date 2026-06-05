let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 0;
  y = height / 2;

  colorMode(HSB, width, 100, 100);
}

function draw() {
  clear();

  const max = dist(0, 0, width / 2, height / 2);
  const d = dist(width / 2, height / 2, mouseX, mouseY);
  circle(mouseX, mouseY, map(d, 0, max, max, 0));
  fill(mouseX, 100, 100);
}
