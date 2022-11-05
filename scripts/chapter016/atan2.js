function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  const rad = atan2(mouseY - height / 2, mouseX - width / 2);

  clear();

  stroke(240);
  strokeWeight(1);
  noFill();
  translate(width / 2, height / 2);
  rotate(rad);
  line(0, 0, 60, 0);
  line(60, 0, 50, -10);
  line(60, 0, 50, 10);
  resetMatrix();

  stroke(100);
  strokeWeight(2);
  noFill();
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);
}