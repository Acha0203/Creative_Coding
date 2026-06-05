function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(240);

  const space = 20;
  const a = { x: space, y: height - space };
  const b = { x: width / 3, y: space };
  const c = { x: (width / 3) * 2, y: height - space };
  const d = { x: width - space, y: space };

  drawBezier3(a, b, c, d);

  drawCircle(a);
  drawCircle(b);
  drawCircle(c);
  drawCircle(d);
}

function drawBezier3(a, b, c, d) {
  let prev = a;

  const n = 100;
  for (let ii = 0; ii <= n; ii++) {
    const t = ii / n;
    const e = lerp2d(a, b, t);
    const f = lerp2d(b, c, t);
    const g = lerp2d(c, d, t);
    const h = lerp2d(e, f, t);
    const i = lerp2d(f, g, t);
    const j = lerp2d(h, i, t);
    line(prev.x, prev.y, j.x, j.y);

    prev = j;
  }
}

function drawCircle(pos) {
  push();
  strokeWeight(2);
  fill('#292a33');
  circle(pos.x, pos.y, 10);
  pop();
}

function lerp2d(a, b, t) {
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
}
