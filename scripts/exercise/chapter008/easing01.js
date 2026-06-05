let t, x1, y1, x2, y2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x1 = 0;
  y1 = height;
  x2 = width;
  y2 = 0;

  t = 0;
}

function tt(t) {
  return t * t;
}

function draw() {
  const x = lerp(x1, x2, tt(t));
  const y = lerp(y1, y2, tt(t));
  t += 0.005;
  if (t > 1) {
    t = 0;
  }

  clear();
  circle(x, y, 20);
}
