const frequency = 5;
const volume = 0.3;
const numPoints = 1;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  strokeWeight(5);
  noFill();
}

function draw() {
  background(0, 0.1);
  stroke(233, 100, 100);
  t += 2;

  for (let i = 0; i < numPoints; i++) {
    const x = (t + i * (width / numPoints)) % width;
    const y = height / 2 + height * volume * sin((x * frequency * TAU) / width);
    point(x, y);
  }
}
