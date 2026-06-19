function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();
}

function draw() {
  blendMode(BLEND);
  background(0, 0.05);
  blendMode(ADD);

  const x = width / 2;
  const y = height / 2;

  let radius = 1;

  for (let i = 0; i < x; i++) {
    stroke((frameCount + i) % 90, (frameCount + i) % 50, (frameCount + i) % 50, 0.1);
    circle(x - radius, y, radius * 2);
    circle(x + radius, y, radius * 2);
    radius += 5;
  }
}

// #minacoding 2026 June 18th, Quick
