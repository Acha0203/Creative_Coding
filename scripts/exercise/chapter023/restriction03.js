const r = 30;
const n = 40;
let angle, hist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  hist = [];

  angleMode(DEGREES);
  angle = 0;
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  scale(6);

  const x = round(cos(angle) * r);
  const y = round(sin(angle) * r);

  hist.push({ x, y });
  if (hist.length > n) {
    hist.shift();
  }

  hist.forEach((p, i) => {
    fill(map(i, 0, hist.length, 0, 240));
    rect(p.x, p.y, 1, 1);
  });
  fill(240);
  rect(x, y, 1, 1);

  angle += 2;
}
