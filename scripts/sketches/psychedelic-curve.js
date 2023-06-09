r = 0;
let p1, p2, p3, p4;

function drawCurve(n, i, x1, y1, x2, y2, x3, y3, x4, y4) {
  stroke((frameCount % 360) + i * 5 * n, 90, i * 5);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();

  p1 = { x: -100, y: 100 };
  p2 = { x: 0, y: -100 };
  p3 = { x: 100, y: 100 };
  p4 = { x: 200, y: -100 };
}

function draw() {
  background(0, 0.1);
  translate(width / 2, height / 2);

  for (i = 0; i < 20; i++) {
    rotate(r);
    drawCurve(0, i, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    drawCurve(1, i, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x + 100, p1.y);
    drawCurve(2, i, p3.x, p3.y, p4.x, p4.y, p4.x + 100, p1.y, p4.x + 200, p2.y);
  }
  r += 0.002;
}
