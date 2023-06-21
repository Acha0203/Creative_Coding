function setup() {
  createCanvas(720, 720);
  noStroke();
  background(255);
  fill(0);

  translate(width / 2, height / 2);
  scale(0.5);
  rotatePattern(-400);
  scale(1.3);
  rotate(HALF_PI / 2);
  rotatePattern(-430);
}

function drawSpiral(cx, cy, direction) {
  const spiralCenterX =
    ((cos(TAU * 2.02) * TAU * 2.02 * height) / 100) * direction;
  for (let r = 0; r < TAU * 2.02; r += PI / 360) {
    const p = (r * height) / 100;
    const x = cos(r) * p * direction + (cx - spiralCenterX);
    const y = sin(r) * p + cy;
    circle(x, y, r + height / 64);
  }
}

function drawKnot(cx, cy, direction) {
  const spiralCenterY = sin(TAU * 1.75) * TAU * 1.75 * (height / 100);
  for (let r = 1.5 * PI; r < TAU; r += PI / 360) {
    const x = pow(cos(r), 3) * (height / 7) * direction + cx;
    const y = pow(sin(r), 3) * (height / 7) + cy + spiralCenterY + height / 520;
    circle(x, y, r * (height / 260));
  }
}

function drawThorn(cx, cy, direction) {
  const startPointX = cos(2 * PI) * (height / 14) * direction;
  for (let i = 0; i < height / 2; i += 0.5) {
    const r = i * (PI / (height / 4));
    const x = cos(r) * (height / 14) * direction + cx - startPointX;
    const y = i + cos(r) * (height / 40) + cy - height / 150;
    circle(x, y, height / 30 - r);
  }
}

function drawPattern(x, y) {
  drawSpiral(x, y, 1);
  drawSpiral(x, y, -1);
  drawKnot(x, y, 1);
  drawKnot(x, y, -1);
  drawThorn(x, y, 1);
  drawThorn(x, y, -1);
}

function rotatePattern(position) {
  for (let i = 0; i < 4; i++) {
    rotate(HALF_PI * i);
    drawPattern(0, position);
  }
}

// minacoding Day 20: テーマ「人間」3日目
