function setup() {
  createCanvas(windowWidth, windowHeight);

  stroke(240);
  noFill();

  const xMin = 0;
  const xMax = 1;
  let px = 0;
  let py = height;

  for (let i = xMin; i <= xMax; i += 0.01) {
    const x = i;
    const y = smoothstep(x);

    const tx = map(x, xMin, xMax, 0, width);
    const ty = map(y, 0, 1, height, 0);

    line(px, py, tx, ty);

    px = tx;
    py = ty;
  }
}

function smoothstep(x) {
  return x * x * (3 - 2 * x);
}
