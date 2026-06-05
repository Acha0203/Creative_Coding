function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  const n = 10;
  const step = width / n;

  for (let x = 0; x < width; x++) {
    fill(map(floor(x / step), 0, n - 1, 0, 255), 0, 0);
    rect(x, 0, 1, height);
  }
}
