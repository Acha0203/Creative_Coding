let x, y, gx, gy, fx, fy, count, size;
let direction = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();
  size = windowWidth / 3;
  x = 0;
  y = size / 5;
  gx = 0;
  gy = 0;
  fx = x;
  fy = y;
  count = 0;
}

function draw() {
  background(0, 0.01);
  const stepTh = PI / 72;
  const startTh = PI * -0.75 + PI / 72;

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

  if (frameCount % 36 == 0) {
    x = gx;
    y = gy;
    direction = -direction;
  }

  gx = x + size * cos(startTh + stepTh * (frameCount % 36));
  gy = y + size * sin(startTh + stepTh * (frameCount % 36)) * direction;
  stroke((x * y) % 360, 100, 100 - (frameCount % 36) * 2);
  line(x, y, gx, gy);
}
