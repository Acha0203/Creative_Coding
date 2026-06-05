function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(240);

  const space = 20;
  const a = { x: space, y: height - space };
  const b = { x: width / 2, y: space };
  const c = { x: width - space, y: height - space };

  drawBezier(a, b, c);

  drawCircle(a);
  drawCircle(b);
  drawCircle(c);
}

function drawBezier(a, b, c) {
  let prev = a;

  const n = 100;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const d = lerp2d(a, b, t);
    const e = lerp2d(b, c, t);
    const f = lerp2d(d, e, t);
    line(prev.x, prev.y, f.x, f.y);

    prev = f;
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
