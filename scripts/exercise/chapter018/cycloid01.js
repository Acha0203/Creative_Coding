let r = 20;
let x, y, angle, hist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  hist = [];

  x = 0;
  y = height / 2;
  angle = 0;
}

function draw() {
  clear();
  circle(x, y, r * 2);

  const tx = x + cos(angle) * r;
  const ty = y + sin(angle) * r;

  // 円が画面内にいる間だけ位置の記録を行う
  if (x < width + r) {
    hist.push({ x: tx, y: ty });
  }

  let prev = hist[0];
  for (let i = 1; i < hist.length; i++) {
    const cur = hist[i];
    line(prev.x, prev.y, cur.x, cur.y);
    prev = cur;
  }

  x++;
  angle += 0.1;
}
