let c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 1);
  c1 = color(0.1, 1, 1);
  c2 = color(0.9, 1, 0.05);
  noFill();
}

function draw() {
  background(0, 0.05);

  for (let i = 0; i < 10; i++) {
    stroke(lerpColor(c1, c2, noise(frameCount / 100, i)));

    const fn = (m, n) => {
      return m * noise(frameCount / 100, n + i);
    };

    const x1 = fn(width, 0);
    const x2 = fn(width, 10);
    const x3 = fn(width, 20);
    const x4 = fn(width, 30);
    const y1 = fn(height, 40);
    const y2 = fn(height, 50);
    const y3 = fn(height, 60);
    const y4 = fn(height, 70);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}
