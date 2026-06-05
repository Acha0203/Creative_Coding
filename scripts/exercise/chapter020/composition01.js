const r1 = 50;
const r2 = 120;
const speed1 = 0.03;
const speed2 = 0.01;
let angle1, angle2, hist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  angle1 = 0;
  angle2 = 0;

  hist = [];
}

function draw() {
  clear();

  angle1 += speed1;
  angle2 += speed2;

  translate(width / 2, height / 2);
  const x1 = cos(angle1) * r1;
  const y1 = sin(angle1) * r1;
  const x2 = cos(angle2) * r2;
  const y2 = sin(angle2) * r2;

  const v = createVector(x2 - x1, y2 - y1);
  v.setMag(300);
  hist.push({ x: v.x, y: v.y });
  if (hist.length > 100) {
    hist.shift();
  }

  circle(0, 0, r1 * 2);
  circle(0, 0, r2 * 2);
  line(x1, y1, v.x, v.y);

  for (let i = 0; i < hist.length - 1; i++) {
    line(hist[i].x, hist[i].y, hist[i + 1].x, hist[i + 1].y);
  }
}
