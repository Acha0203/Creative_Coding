function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noFill();
}

function draw() {
  // clear();
  strokeWeight(random(1, 5));
  stroke(random(360), random(100), random(100));
  // circle(width / 2, height / 2, random(50, 300));
  ellipse(random(width), height / 2, random(50, 300), random(50, 300));
}
