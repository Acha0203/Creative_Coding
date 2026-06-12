const frequency = 5;
const animDuration = 120; // frames to reach full amplitude

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  strokeWeight(5);
  noFill();
}

function draw() {
  clear();
  background(0);
  stroke(255, 255, 255);

  const progress = 1 - abs((frameCount % (2 * animDuration)) / animDuration - 1);

  for (let i = 1; i < height; i++) {
    point(width / 2 + width * (i * 0.0001) * sin((i * frequency * TAU) / height) * progress, i);
  }
}

// #minacoding 2026 June 12th, Rainy
// Our hair gets winding during the rainy season