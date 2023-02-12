function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240, 50);
}

function draw() {
  for (let i = 0; i < 20; i++) {
    const x = random(width);
    const y = random(height);
    point(x, y);
  }
}
