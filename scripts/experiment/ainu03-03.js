function setup() {
  createCanvas(720, 720);
  noStroke();

  drawPattern3();
}

function drawSpiral(cx, cy, direction) {
  const spiralCenterX =
    ((Math.cos(TAU * 2.02) * TAU * 2.02 * height) / 100) * direction;
  for (let r = 0; r < TAU * 2.02; r += PI / 180) {
    const p = (r * height) / 100;
    const x = Math.cos(r) * p * direction + (cx - spiralCenterX);
    const y = Math.sin(r) * p + cy;
    circle(x, y, r + height / 64);
  }
}

function drawKnot(cx, cy, direction) {
  const spiralCenterY = Math.sin(TAU * 1.75) * TAU * 1.75 * (height / 100);
  for (let r = 1.5 * PI; r < TAU; r += PI / 180) {
    const x = Math.pow(Math.cos(r), 3) * (height / 7) * direction + cx;
    const y =
      Math.pow(Math.sin(r), 3) * (height / 7) +
      cy +
      spiralCenterY +
      height / 520;
    circle(x, y, r * (height / 260));
  }
}

function drawThorn(cx, cy, direction) {
  const startPointX = Math.cos(2 * PI) * (height / 14) * direction;
  for (let i = 0; i < height / 2; i += 1) {
    const r = i * (PI / (height / 4));
    const x = Math.cos(r) * (height / 14) * direction + cx - startPointX;
    const y = i + Math.cos(r) * (height / 40) + cy - height / 150;
    circle(x, y, height / 30 - r);
  }
}

function drawLargeSpiral(cx, cy, direction) {
  const spiralCenterX =
    ((Math.cos(TAU) * TAU * height) / 100 + TAU + height / 256) * direction;
  for (let r = 0; r < TAU * 1.72; r += PI / 180) {
    const p = (r * height) / 100;
    const x = Math.cos(r) * p * direction + (cx - spiralCenterX);
    const y = Math.sin(r) * p + cy;
    circle(x, y, r + height / 64);
  }
}

function drawKnot2(cx, cy, direction) {
  let spiralCenterY = Math.sin(TAU * 1.73) * TAU * 1.73 * (height / 100);

  for (let r = 1.5 * PI; r < (TAU * 35) / 36; r += PI / 180) {
    const x = Math.pow(Math.cos(r), 3) * (height / 10) * direction + cx;
    const y =
      Math.pow(Math.sin(r), 3) * (height / 10) +
      cy +
      spiralCenterY +
      height / 520;
    circle(x, y, r * (height / 200));
  }

  spiralCenterY = Math.sin(TAU * 1.58) * TAU * 1.58 * (height / 100);

  for (let r = 1.5 * PI; r < (TAU * 35) / 36; r += PI / 180) {
    const x = Math.pow(Math.cos(r), 3) * (height / 20) * direction + cx;
    const y =
      Math.pow(Math.sin(r), 3) * (height / 20) +
      cy +
      spiralCenterY +
      height / 520;
    circle(x, y, r * (height / 250));
  }
}

function drawPattern1(x, y) {
  drawSpiral(x, y, 1);
  drawSpiral(x, y, -1);
  drawKnot(x, y, 1);
  drawKnot(x, y, -1);
  drawThorn(x, y, 1);
  drawThorn(x, y, -1);
}

function drawPattern2(x, y) {
  drawLargeSpiral(x, y, 1);
  drawLargeSpiral(x, y, -1);
  drawKnot2(x, y, 1);
  drawKnot2(x, y, -1);
}

function drawPattern3() {
  background(0);
  translate(width / 2, height / 2);
  scale(0.5);
  rotate(HALF_PI / 2);
  fill(255);

  for (let i = 0; i < 4; i++) {
    rotate(HALF_PI * i);
    drawPattern2(0, -300);
  }

  scale(0.9);
  rotate(HALF_PI / 2);

  for (let i = 0; i < 4; i++) {
    rotate(HALF_PI * i);
    drawPattern1(0, -430);
  }
}
// minacoding
