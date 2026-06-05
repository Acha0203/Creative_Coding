function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();
}

function draw() {
  const d = dist(mouseX, mouseY, width / 2, height / 2);
  const angle = atan2(mouseY - height / 2, mouseX - width / 2);

  clear();
  translate(width / 2, height / 2);
  rotate(angle);
  line(0, 0, d, 0);
  line(d, 0, d - 10, -10);
  line(d, 0, d - 10, 10);
  resetMatrix();
}
