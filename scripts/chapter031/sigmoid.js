function setup() {
  createCanvas(windowWidth, windowHeight);

  stroke(240);
  noFill();

  const xMin = -7;
  const xMax = 7;
  let px = 0;
  let py = height;

  for (let i = xMin; i <= xMax; i += 0.1) {
    const x = i;
    const y = sigmoid(x);

    const tx = map(x, xMin, xMax, 0, width);
    const ty = map(y, 0, 1, height, 0);

    line(px, py, tx, ty);

    px = tx;
    py = ty;
  }
}

function sigmoid(x) {
  return 1 / (1 + exp(-x));
}
