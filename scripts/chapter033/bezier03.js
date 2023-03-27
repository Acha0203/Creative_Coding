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
    const dx = calcBezier(a.x, b.x, c.x, t);
    const dy = calcBezier(a.y, b.y, c.y, t);
    line(prev.x, prev.y, dx, dy);

    prev = { x: dx, y: dy };
  }
}

function calcBezier(a, b, c, t) {
  return (a * (1 - t) + b * t) * (1 - t) + (b * (1 - t) + c * t) * t;
}

function drawCircle(pos) {
  push();
  strokeWeight(2);
  fill('#292a33');
  circle(pos.x, pos.y, 10);
  pop();
}
