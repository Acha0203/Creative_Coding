let tx, ty;
let circles;
const r = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);

  tx = width / 2;
  ty = height / 2;

  circles = [];
  for (let i = 0; i < 50; i++) {
    const x = random(width);
    const y = random(height);
    circles.push({ x, y });
  }
}

function draw() {
  clear();

  ty++;
  ty %= height;

  circles.forEach((c) => {
    drawCircle(c);
  });

  drawTarget();
}

function drawCircle(c) {
  strokeWeight(2);
  stroke(240);
  noFill();
  circle(c.x, c.y, r * 2);
  const rad = atan2(ty - c.y, tx - c.x);
  line(c.x, c.y, c.x + cos(rad) * r, c.y + sin(rad) * r);
}

function drawTarget() {
  strokeWeight(2);
  stroke(240);
  line(tx - 10, ty, tx + 10, ty);
  line(tx, ty - 10, tx, ty + 10);
}
