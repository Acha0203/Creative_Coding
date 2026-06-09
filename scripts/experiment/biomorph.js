function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  noStroke();
  noLoop();
}

function draw() {
  // blendMode(BLEND);
  background(0);
  // blendMode(ADD);

  const dotSize = 1;
  const zoomRatio = 7;
  const ca = 0.5;
  const cb = 0;

  // translate(width / zoomRatio, height / zoomRatio);

  drawBiomorph(dotSize, zoomRatio, ca, cb);
}

function calcRealZ(a, b, ca) {
  const a2 = a * a;
  const b2 = b * b;
  return a * (a2 * a2 - 10 * a2 * b2 + 5 * b2 * b2) + ca;
  // return a * a * a - 3 * a * b * b + ca;
}

function calcImagZ(a, b, cb) {
  const a2 = a * a;
  const b2 = b * b;
  return b * (5 * a2 * a2 - 10 * a2 * b2 + b2 * b2);
  // return 3 * a * a * b - b * b * b + cb;
}

function isZGreaterThanTen(a, b) {
  return a * a - b * b > 100;
}

function drawBiomorph(dotSize, zoomRatio, ca, cb) {
  let a = 0;
  let b = 0;
  let za = 0;
  let zb = 0;

  for (let j = 1; j <= 100; j += 0.5) {
    for (let k = 1; k <= 100; k += 0.5) {
      const a0 = -1.5 + 0.03 * j;
      const b0 = -1.5 + 0.03 * k;

      a = a0;
      b = b0;

      for (let n = 1; n <= 10; n++) {
        za = calcRealZ(a, b, ca);
        zb = calcImagZ(a, b, cb);
        a = za;
        b = zb;

        if (a * a > 100) break;
        if (b * b > 100) break;
        if (isZGreaterThanTen(a, b)) break;
      }

      if (a * a < 100 || b * b < 100) {
        fill(0, 255, 0);
        circle(j * zoomRatio, k * zoomRatio, dotSize);
      }
    }
  }
}
