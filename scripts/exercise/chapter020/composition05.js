const n = 30;
const k = 3;
let baseRad, rx, ry;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rx = 200;
  ry = 0;
  baseRad = 0;
}

function draw() {
  clear();
  drawItem();

  baseRad += 0.02;
  rx -= 0.4;
  ry += 0.4;
}

function drawItem() {
  const a = [];
  const b = [];

  for (let rad = 0; rad < TWO_PI; rad += TWO_PI / n) {
    const x = width / 4 + cos(baseRad + rad) * rx;
    const y = height / 2 + sin(baseRad + rad) * ry;

    circle(x, y, 10);
    circle(width - x, height - y, 10);

    a.push({ x, y });
    b.push({ x: width - x, y: height - y });
  }

  for (let i = 0; i < k; i++) {
    b.unshift(b.pop());
  }

  push();
  stroke(240);
  noFill();

  for (let i = 0; i < a.length; i++) {
    line(a[i].x, a[i].y, b[i].x, b[i].y);
  }

  pop();
}
