r = 0;
let p1, p2, p3, p4;

function fn(m, n) {
  return m * noise(n);
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
    stroke(frameCount % 360, 90, i * 5);
    rotate(r);
    curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    stroke((frameCount % 360) + i * 5, 90, i * 10);
    curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x + 100, p1.y);
    stroke((frameCount % 360) + i * 10, 90, i * 10);
    curve(p3.x, p3.y, p4.x, p4.y, p4.x + 100, p1.y, p4.x + 200, p2.y);
  }
  r += 0.002;
}
