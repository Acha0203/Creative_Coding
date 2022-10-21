let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 0;
  y = height / 2;
}

function draw() {
  x++;
  x %= width;

  clear();

  strokeWeight(1);
  stroke('#f0f0f0');
  noFill();
  line(0, y, width, y);
  line(x, y - 10, x, y + 10);

  const r = map(x, 0, width, 300, 0);
  strokeWeight(6);
  stroke('#f0f0f0');
  noFill();
  circle(x, y, r);
}

Resources;
