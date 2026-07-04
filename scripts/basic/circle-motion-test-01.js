let angle = 0;
let radius = 100; // 円軌道の半径

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0, 0.1);
  stroke(233, 100, 100);

  translate(width / 2, height / 2);

  let x = cos(angle) * radius;
  let y = sin(angle) * radius;

  circle(x, y, 10);

  angle += 0.05;
}
