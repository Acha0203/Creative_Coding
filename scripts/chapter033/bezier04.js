function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(240);

  const space = 20;
  const a = { x: space, y: height - space };
  const b = { x: width / 3, y: space };
  const c = { x: (width / 3) * 2, y: height - space };
  const d = { x: width - space, y: space };

  drawBezier(a, b, c, d);

  drawCircle(a);
  drawCircle(b);
  drawCircle(c);
  drawCircle(d);
}

function drawBezier(a, b, c, d) {
  let prev = a;

  const n = 100;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const dx = calcBezier3(a.x, b.x, c.x, d.x, t);
    const dy = calcBezier3(a.y, b.y, c.y, d.y, t);
    line(prev.x, prev.y, dx, dy);

    prev = { x: dx, y: dy };
  }
}

function calcBezier3(a, b, c, d, t) {
  return (
    a * (1 - t) ** 3 +
    b * 3 * (1 - t) ** 2 * t +
    c * 3 * (1 - t) * t ** 2 +
    d * t ** 3
  );
}

function drawCircle(pos) {
  push();
  strokeWeight(2);
  fill('#292a33');
  circle(pos.x, pos.y, 10);
  pop();
}
