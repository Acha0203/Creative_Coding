function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  // clear();
  strokeWeight(random(1, 5));
  stroke(random(100, 240));
  // circle(width / 2, height / 2, random(50, 300));
  ellipse(mouseX, mouseY, random(50, 300), random(50, 300));
}
