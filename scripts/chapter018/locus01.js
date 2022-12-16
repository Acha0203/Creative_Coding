const n = 100;
const r = 100;
let hist, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  hist = [];
  angle = 0;
}

function draw() {
  const x = cos(angle) * r;
  const y = sin(angle) * r;

  hist.push({ x, y });
  angle += 2;

  if (hist.length > n) {
    hist.shift();
  }

  clear();
  stroke(240);
  noFill();
  translate(width / 2, height / 2);

  let prev = hist[0];
  for (let i = 1; i < hist.length; i++) {
    const cur = hist[i];
    line(prev.x, prev.y, cur.x, cur.y);
    // circle(prev.x, prev.y, angle % 720);
    // circle(cur.x, cur.y, angle % 360);
    prev = cur;
  }
}
