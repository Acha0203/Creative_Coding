const drawScale = 100;
let noiseValA = 0.002;
let noiseValB = 0.002;
let noiseValC = 0.002;
let noiseValD = 0.002;
let a = -1.5;
let b = 1.7;
let c = -1.8;
let d = -0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  blendMode(ADD);
  stroke(0, 100, 100, 100);
}

function draw() {
  clear();
  translate(windowWidth / 2, windowHeight / 2);
  let xNow = 0.1;
  let yNow = 0.1;

  if (a > -1.42 || a < -1.52) noiseValA *= -1;
  if (b > 1.75 || b < 1.65) noiseValB *= -1;
  if (c > -1.65 || c < -1.85) noiseValC *= -1;
  if (d > -0.45 || d < -0.55) noiseValD *= -1;

  for (let i = 0; i < 1e5; i++) {
    const xNext = sin(a * yNow) + c * Math.cos(a * xNow);
    const yNext = sin(b * xNow) + d * Math.cos(b * yNow);

    point(xNext * drawScale, yNext * drawScale);

    xNow = xNext;
    yNow = yNext;
  }

  a += noiseValA;
  b += noiseValB;
  c += noiseValC;
  d += noiseValD;
}
