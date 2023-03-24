function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  for (let i = 0; i < 100; i++) {
    const x1 = -1000;
    const y1 = height / 4;
    const x2 = width + 1000;
    const y2 = height / 4;

    strokeWeight(random(1, 10));
    translate(width / 2, height / 2);
    rotate(random(PI * 2));
    line(x1, y1, x2, y2);
    resetMatrix();
  }
}
