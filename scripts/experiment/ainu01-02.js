function setup() {
  createCanvas(1020, 720);
  noStroke();
  background(0);
  fill(255);

  drawPattern(0, height / 3);
  drawPattern(width / 3, height / 3);
  drawPattern((width * 2) / 3, height / 3);
  drawPattern(width, height / 3);
}

function drawSpiral(cx, cy, direction) {
  const spiralCenterX =
    ((cos(TAU * 2.02) * TAU * 2.02 * height) / 100) * direction;
  for (let r = 0; r < TAU * 2.02; r += PI / 360) {
    const p = (r * height) / 100;
    const x = cos(r) * p * direction + (cx - spiralCenterX);
    const y = sin(r) * p + cy;
    circle(x, y, r + height / 60);
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
    const y = i + cos(r) * (height / 40) + cy - height / 256;
    circle(x, y, height / 32 - r);
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

// minacoding Day 20: テーマ「人間」3日目
