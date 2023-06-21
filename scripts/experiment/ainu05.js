function setup() {
  createCanvas(720, 720);
  noStroke();
  background(255);
  fill(0);

  drawPattern(width / 2, height / 2);
}

function drawLargeSpiral(cx, cy, direction) {
  const spiralCenterX =
    ((cos(TAU * 1.02) * TAU * 1.72 * height) / 100) * direction;
  for (let r = 0; r < TAU * 1.72; r += PI / 360) {
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

function drawPattern(x, y) {
  drawLargeSpiral(x, y, 1);
  drawLargeSpiral(x, y, -1);
  drawKnot(x, y, 1);
  drawKnot(x, y, -1);
}

// function rotatePattern(position) {
//   for (let i = 0; i < 4; i++) {
//     rotate(HALF_PI * i);
//     drawPattern(0, position);
//   }

// minacoding Day 20: テーマ「人間」3日目
