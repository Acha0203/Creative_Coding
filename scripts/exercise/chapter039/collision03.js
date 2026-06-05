let a, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  const w = 200;
  const h = 160;

  a = {
    x: (width - w) / 2,
    y: (height - h) / 2,
    width: w,
    height: h,
  };

  b = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  };
}

function draw() {
  clear();

  stroke(240);
  rect(a.x, a.y, a.width, a.height);

  b.x = mouseX;
  b.y = mouseY;

  const cx = a.x + a.width - 1 >= b.x && a.x <= b.x + b.width - 1;
  const cy = a.y + a.height - 1 >= b.y && a.y <= b.y + b.height - 1;
  if (cx && cy) {
    stroke(255, 0, 0);
  }
  rect(b.x, b.y, b.width, b.height);
}
