let x, y, vx, vy, r;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
  r = 30;
}

function draw() {
  x += vx;
  y += vy;

  if (x - r <= 0) {
    x = r;
    vx *= -1;
  } else if (x + r >= width - 1) {
    x = width - 1 - r;
    vx *= -1;
  }

  if (y - r < 0) {
    y = r;
    vy *= -1;
  } else if (y + r >= height - 1) {
    y = height - 1 - r;
    vy *= -1;
  }

  clear();
  circle(x, y, r * 2);
}
