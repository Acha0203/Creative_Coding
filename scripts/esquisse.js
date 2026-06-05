const frequency = 8;
const volume = 0.3;
const interval = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0, 0.05);

  const numPoints = width / interval;

  for (let i = 1; i < numPoints; i++) {
    const x = (frameCount + i * interval) % width;
    let y =
      height / 2 + height * volume * sin(((x + i / noise(interval)) * frequency * TAU) / width);

    fill(frameCount % (i * interval), 100, 100, 0.2);
    circle(x, y, interval * sin(i));
  }
}

// #minacoding 2026 June 6th, Place
// I coded this on p5.js Web Editor.
