let x, y;
let r;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  y = height / 2;
  r = 30;
}

function draw() {
  x += 2;
  y += 2;

  if (x + r < 0) {
    x = width - 1 - r;
  } else if (x - r >= width) {
    x = r;
  }

  if (y + r < 0) {
    y = height - 1 - r;
  } else if (y - r >= height) {
    y = r;
  }

  clear();
  circle(x, y, r * 2);
}
