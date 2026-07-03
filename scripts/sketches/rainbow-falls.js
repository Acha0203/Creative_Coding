const volume = 0.3;
const frequency = 5;
const noiseScale = 0.01;
const numCurtains = 30;
const noiseSeed = 1000;

let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  strokeWeight(5);
  noFill();
}

function draw() {
  background(0, 0.1);

  t += 5;

  const numPoints = width / 3;
  const stagger = height / numCurtains;

  for (let j = 0; j < numCurtains; j++) {
    const fallY = (t + stagger * j) % height;

    for (let i = 0; i < numPoints; i++) {
      const noiseFactor = noise(i * noiseScale, noiseSeed * j + t * 0.002) - 0.5;
      const x = (i * (width / numPoints)) % width;
      const y = fallY + height * volume * noiseFactor * sin((x * frequency * TAU) / width);

      stroke((90 + t + stagger * j) % 200, 90, (t + stagger * j) % 100, 0.5);
      point(x, y);
    }
  }
}

// #minacoding 2026 June 30th, Free
