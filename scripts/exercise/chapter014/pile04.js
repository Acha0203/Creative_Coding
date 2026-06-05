function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

  const n = 30;
  colorMode(HSB, n, 100, 100);

  for (let i = 0; i < n; i++) {
    translate(width / 2, height / 2);
    rotate(map(i, 0, n, 0, 360));
    scale(map(i, 0, n, 1, 0.1));
    fill(i, 100, 100);
    rect(0, 0, 300, 300);
    resetMatrix();
  }
}
