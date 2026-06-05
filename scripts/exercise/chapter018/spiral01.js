const n = 600;
let hist, angle, r;

function setup() {
  createCanvas(windowWidth, windowHeight);

  hist = [];
  r = 0;
  angle = 0;
}

function draw() {
  const x = cos(angle) * r;
  const y = sin(angle) * r;
  hist.push({ x, y });
  r += 0.2;
  angle += 0.1;

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
    prev = cur;
  }
}