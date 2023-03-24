function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  for (let i = 0; i < 100; i++) {
    const x1 = random(width);
    const y1 = random(height);
    const x2 = random(width);
    const y2 = random(height);
    line(x1, y1, x2, y2);
  }
}
