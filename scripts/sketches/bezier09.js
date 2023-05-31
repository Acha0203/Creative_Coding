c1, c2;

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
    stroke(lerpColor(c1, c2, noise(frameCount / 100, 0 + i)));

    const x1 = width * noise(frameCount / 100, 0 + i);
    const x2 = width * noise(frameCount / 100, 10 + i);
    const x3 = width * noise(frameCount / 100, 20 + i);
    const x4 = width * noise(frameCount / 100, 30 + i);
    const y1 = height * noise(frameCount / 100, 40 + i);
    const y2 = height * noise(frameCount / 100, 50 + i);
    const y3 = height * noise(frameCount / 100, 60 + i);
    const y4 = height * noise(frameCount / 100, 70 + i);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}
