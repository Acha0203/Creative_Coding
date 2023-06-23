function setup() {
  createCanvas(720, 720);
  noStroke();
  background(255);
  fill(0);

  drawPattern2(width / 2, height / 2);
}

function drawLargeSpiral(cx, cy, direction) {
  const spiralCenterX =
    ((cos(TAU) * TAU * height) / 100 + TAU + height / 256) * direction;
  for (let r = 0; r < TAU * 1.72; r += PI / 360) {
    const p = (r * height) / 100;
    const x = cos(r) * p * direction + (cx - spiralCenterX);
    const y = sin(r) * p + cy;
    circle(x, y, r + height / 64);
  }
}

function drawKnot2(cx, cy, direction) {
  let spiralCenterY = sin(TAU * 1.73) * TAU * 1.73 * (height / 100);

  for (let r = 1.5 * PI; r < (TAU * 35) / 36; r += PI / 360) {
    const x = pow(cos(r), 3) * (height / 10) * direction + cx;
    const y =
      pow(sin(r), 3) * (height / 10) + cy + spiralCenterY + height / 520;
    circle(x, y, r * (height / 200));
  }

  spiralCenterY = sin(TAU * 1.58) * TAU * 1.58 * (height / 100);

  for (let r = 1.5 * PI; r < (TAU * 35) / 36; r += PI / 360) {
    const x = pow(cos(r), 3) * (height / 20) * direction + cx;
    const y =
      pow(sin(r), 3) * (height / 20) + cy + spiralCenterY + height / 520;
    circle(x, y, r * (height / 250));
  }
}

function drawPattern2(x, y) {
  drawLargeSpiral(x, y, 1);
  drawLargeSpiral(x, y, -1);
  drawKnot2(x, y, 1);
  drawKnot2(x, y, -1);
}

// minacoding
