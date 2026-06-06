const volume = 0.3;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  t += 0.5;
  background(0, 0.05);

  const frequency = width / 90;
  const numPoints = frequency * 2;
  const interval = width / numPoints;

  for (let i = 1; i <= numPoints; i++) {
    const x = (t + i * interval) % width;
    let y =
      height / 2 + height * volume * sin(((x + i / noise(interval)) * frequency * TAU) / width);

    fill(t % Math.floor(i * interval * 0.5), 100, 100, 0.2);
    circle(x, y, interval * sin(i));
  }
}

// #minacoding 2026 June 6th, Place
// I coded this on p5.js Web Editor.
