let x, y, gx, gy, fx, fy, count, size;
let direction = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  noFill();
  size = windowWidth / 3;
  x = 0;
  y = size / 3;
  gx = 0;
  gy = 0;
  fx = x;
  fy = y;
  count = 0;
}

function draw() {
  background(0, 0.01);
  const step = 3;
  const start = -135 + step;

  if (gx > width && x > width) {
    fy += size * 1.2;
    x = fx;
    y = fy;
    direction = -1;
    count++;
  }

  if (gy > height && y > height) {
    fy -= size * 1.2 * count + size / 2.5;
    x = fx;
    y = fy;
    direction = -1;
    count = 0;
  }

  if (frameCount % 30 == 0) {
    x = gx;
    y = gy;
    direction = -direction;
  }

  const angle = start + step * (frameCount % 30);

  gx = x + size * cos(angle);
  gy = y + size * sin(angle) * direction;
  stroke((x * y) % 360, 100, 100 - (frameCount % 30) * 2);
  line(x, y, gx, gy);
}
