let c, r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  c = { x: width / 2, y: height / 2, r: 60 };
  r = 100;
}

function draw() {
  const d = dist(c.x, c.y, mouseX, mouseY);
  const col = d <= r + c.r ? '#ff9900' : '#fff';

  clear();
  stroke(240);
  circle(c.x, c.y, c.r * 2);
  stroke(col);
  circle(mouseX, mouseY, r * 2);
}
