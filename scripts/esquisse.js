function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
  noLoop();
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(ADD);
  translate(width / 2, height / 2);

  const dotSize = 5;
  const zoomRatio = 150;

  drawPopcorn(dotSize, zoomRatio);
}

function calcXY(x, y) {
  return x - 0.05 * sin(y + tan(3 * y));
}

function drawPopcorn(dotSize, zoomRatio) {
  let x = 0;
  let y = 0;

  for (let j = 1; j <= 50; j++) {
    for (let k = 1; k <= 50; k++) {
      const x0 = -6 + 0.24 * j;
      const y0 = -6 + 0.24 * k;

      x = x0;
      y = y0;

      const repCount = j * k;

      for (let n = 0; n < 50; n++) {
        const xx = calcXY(x, y);
        const yy = calcXY(y, x);

        x = xx;
        y = yy;

        fill((repCount + n) % 360, 60, n, 0.7);
        circle(x * zoomRatio, y * zoomRatio, dotSize);
      }
    }
  }
}

// Fractal Popcorn
// This code is based on 'Computer Recreation IV' by A. K. Dewdney.
