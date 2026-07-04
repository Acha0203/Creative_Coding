const frequency = 5;
const volume = 0.5;

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

  for (let i = 0; i < width; i++) {
    point(i, height / 2 + height * volume * sin((i * frequency * TAU) / width));
  }
}
