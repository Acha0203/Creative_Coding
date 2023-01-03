let circle1, circle2, hist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  colorMode(HSB);

  circle1 = {
    x: 0,
    y: height / 2,
    r: 50,
    angle: 0,
    speed: 0.08,
  };

  circle2 = {
    x: width / 4,
    y: height / 2,
    r: 100,
    angle: 0,
    speed: 0.03,
  };

  hist = [];
}

function draw() {
  clear();

  circle1.angle += circle1.speed;
  circle2.angle += circle2.speed;

  // circle(circle1.x, circle1.y, circle1.r * 2);
  // circle(circle2.x, circle2.y, circle2.r * 2);

  const x1 = circle1.x + cos(circle1.angle) * circle1.r;
  const y1 = circle1.y + sin(circle1.angle) * circle1.r;
  const x2 = circle2.x + cos(circle2.angle) * circle2.r;
  const y2 = circle2.y + sin(circle2.angle) * circle2.r;

  const v = createVector(x2 - x1, y2 - y1);
  v.setMag(x1 + width / 2);
  hist.push({ x: x1 + v.x, y: y1 + v.y });
  if (hist.length > 100) {
    hist.shift();
  }

  // line(x1, y1, x1 + v.x, y1 + v.y);

  for (let i = 0; i < hist.length - 1; i++) {
    circle(hist[i].x, hist[i].y, i);
    stroke(i, i, i);
  }

  // push();
  // fill("#292a33");
  // circle(x1, y1, 10);
  // circle(x2, y2, 10);
  // pop();
}
