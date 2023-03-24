function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  for (let i = 0; i < 100; i++) {
    const rad = random(TWO_PI);
    const x = random(width);
    const y = random(height);

    const x1 = x - Math.cos(rad) * 3000;
    const y1 = y - Math.sin(rad) * 3000;
    const x2 = x + Math.cos(rad) * 3000;
    const y2 = y + Math.sin(rad) * 3000;

    strokeWeight(random(1, 10));
    line(x1, y1, x2, y2);
  }
}
