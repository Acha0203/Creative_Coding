let layer1, layer2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width * 2, height * 2);

  layer1.background(0, 50, 255);
  layer2.noStroke();
  drawPattern3();
}

function draw() {
  clear();

  drawBackground(100);

  image(layer1, 0, 0);

  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  // rotate(frameCount * 0.005);
  // scale(frameCount * 0.005);
  image(layer2, 0, 0);
  pop();
}

function drawSpiral(cx, cy, direction) {
  const spiralCenterX =
    ((Math.cos(TAU * 2.02) * TAU * 2.02 * height) / 100) * direction;
  for (let r = 0; r < TAU * 2.02; r += PI / 180) {
    const p = (r * height) / 100;
    const x = Math.cos(r) * p * direction + (cx - spiralCenterX);
    const y = Math.sin(r) * p + cy;
    layer2.circle(x, y, r + height / 64);
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
    layer2.circle(x, y, r * (height / 260));
  }
}

function drawThorn(cx, cy, direction) {
  const startPointX = Math.cos(2 * PI) * (height / 14) * direction;
  for (let i = 0; i < height / 2; i += 1) {
    const r = i * (PI / (height / 4));
    const x = Math.cos(r) * (height / 14) * direction + cx - startPointX;
    const y = i + Math.cos(r) * (height / 40) + cy - height / 150;
    layer2.circle(x, y, height / 30 - r);
  }
}

function drawLargeSpiral(cx, cy, direction) {
  const spiralCenterX =
    ((Math.cos(TAU) * TAU * height) / 100 + TAU + height / 256) * direction;
  for (let r = 0; r < TAU * 1.72; r += PI / 180) {
    const p = (r * height) / 100;
    const x = Math.cos(r) * p * direction + (cx - spiralCenterX);
    const y = Math.sin(r) * p + cy;
    layer2.circle(x, y, r + height / 64);
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
    layer2.circle(x, y, r * (height / 220));
  }

  spiralCenterY = Math.sin(TAU * 1.58) * TAU * 1.58 * (height / 100);

  for (let r = 1.5 * PI; r < (TAU * 35) / 36; r += PI / 180) {
    const x = Math.pow(Math.cos(r), 3) * (height / 20) * direction + cx;
    const y =
      Math.pow(Math.sin(r), 3) * (height / 20) +
      cy +
      spiralCenterY +
      height / 520;
    layer2.circle(x, y, r * (height / 250));
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
  layer2.background(0);
  layer2.translate(width, height);
  layer2.scale(0.5);
  layer2.rotate(HALF_PI / 2);
  layer2.erase(255);

  for (let i = 0; i < 4; i++) {
    layer2.rotate(HALF_PI * i);
    drawPattern2(0, -height * 0.4);
  }

  layer2.scale(0.9);
  layer2.rotate(HALF_PI / 2);

  for (let i = 0; i < 4; i++) {
    layer2.rotate(HALF_PI * i);
    drawPattern1(0, -height * 0.6);
  }
}

function drawBackground(N) {
  layer1.colorMode(HSB);
  layer1.noStroke();
  const step = width / N;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let p = Math.sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      layer1.fill(210 + p * 50, N, N);
      layer1.rect(step * i, step * j, step);
    }
  }
}
// minacoding
