function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f3eed5');
  noFill();
  strokeWeight(4);

  const n = 3;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      drawCircle((width / n) * x, (height / n) * y, width / 3, height / 3);
    }
  }
}

function drawCircle(x, y, w, h) {
  const size = min(w, h) / 2;
  translate(x + w / 2, y + h / 2);
  for (let i = 0; i < 30; i++) {
    stroke(random(256), random(256), random(256));
    for (let a = 0; a < 360; a += 1) {
      push();
      rotate(radians(a));
      const x1 = random(size * 0.2, size * 0.4);
      const x2 = random(size * 0.6, size * 0.8);
      line(x1, 0, x2, 0);
      pop();
    }
  }
  resetMatrix();
}
