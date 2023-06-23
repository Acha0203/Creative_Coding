function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
  fill(255);

  drawSpiral(width / 2, height / 3, height / 60, 1);
  drawSpiral(width / 2, height / 3, height / 60, -1);
  drawKnot(width / 2, height / 3, height / 260, height / 7, 1);
  drawKnot(width / 2, height / 3, height / 260, height / 7, -1);
  drawThorn(width / 2, height / 3, height / 32, height / 2, 1);
  drawThorn(width / 2, height / 3, height / 32, height / 2, -1);
}

function drawSpiral(cx, cy, thickness, direction) {
  const spiralCenterX =
    ((cos(TAU * 2.02) * TAU * 2.02 * height) / 100) * direction;
  for (let r = 0; r < TAU * 2.02; r += PI / 360) {
    const p = (r * height) / 100;
    const x = cos(r) * p * direction + (cx - spiralCenterX);
    const y = sin(r) * p + cy;
    circle(x, y, r + thickness);
  }
}

function drawKnot(cx, cy, thickness, size, direction) {
  const spiralCenterY = sin(TAU * 1.75) * TAU * 1.75 * (height / 100);
  for (let r = 1.5 * PI; r < TAU; r += PI / 360) {
    const x = pow(cos(r), 3) * size * direction + cx;
    const y = pow(sin(r), 3) * size + cy + spiralCenterY + thickness / 2;
    circle(x, y, r * thickness);
  }
}

function drawThorn(cx, cy, thickness, size, direction) {
  const startPointX = cos(size * (PI / (size / 2))) * (size / 7) * direction;
  for (let i = 0; i < size; i += 0.5) {
    const r = i * (PI / (size / 2));
    const x = cos(r) * (size / 7) * direction + cx - startPointX;
    const y = i + cos(r) * (size / 20) + cy - thickness / 8;
    circle(x, y, thickness - r);
  }
}

// minacoding Day 20: テーマ「人間」3日目
