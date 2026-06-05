const space = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  drawLine(10, 10, 100, 100);
  drawLine(0, height / 2, width, height / 2);
}

function drawLine(x1, y1, x2, y2) {
  const d = dist(x1, y1, x2, y2);
  const n = ceil(d / space);

  let v = createVector(x2 - x1, y2 - y1);
  v.setMag(space);

  let x = x1;
  let y = y1;

  for (let i = 0; i < n; i++) {
    x += v.x;
    y += v.y;
    circle(x, y, 5);
  }

  circle(x1, y1, 14);
  circle(x2, y2, 14);
}
