let sx, sy, gx, gy, size, step;
direction = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // colorMode(HSB);
  noFill();

  size = 140;
  step = PI / 60;
}

function draw() {
  background(0, 10);
  strokeWeight(20);
  strokeCap(PROJECT);

  // const n = Math.floor(Math.sqrt(size * size * 2));
  // console.log(n);

  for (let x = 0; x <= width + 220; x += 220) {
    for (let y = 0; y <= height + 220; y += 220) {
      drawWiper(x, y);
    }
  }
}

function drawWiper(cx, cy) {
  let angle = -PI + step * (frameCount % 60);

  sx = cx + size * -cos(angle) * direction;
  sy = cy + size * -sin(angle);
  gx = cx + size * cos(angle) * direction;
  gy = cy + size * sin(angle);

  stroke(90, sx % 90, sy % 255);

  if (frameCount % 60 != 0) {
    line(sx, sy, gx, gy);
  } else {
    direction *= -1;
  }
}
