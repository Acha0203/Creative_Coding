let x = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#efd4cd');
  noFill();
  stroke('#604461');
}

function draw() {
  clear();
  translate(200, height / 2);
  for (let i = 0; i < 300; i++) {
    strokeWeight(random(1, 3));
    translate(x, 0);
    circle(0, 0, i * 3);
  }
}
