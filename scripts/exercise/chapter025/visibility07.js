const d = 100;
const n = 20;
let arcs, baseAngle, positions;

function setup() {
  createCanvas((W = 500), W);
  angleMode(DEGREES);
  blendMode(ADD);

  arcs = [];
  for (let i = 0; i < n; i++) {
    const start = random(360);
    const stop = start + random(50, 360);
    arcs.push({ d: d + (i + 1) * 15, start, stop });
  }

  baseAngle = 0;

  positions = [];
  for (let i = 0; i < n; i++) {
    const x = random(width);
    const y = random(height);
    const s = random(0.5, 1);
    positions.push({ x, y, s });
  }
}

function draw() {
  clear();

  for (let i = 0; i < n; i++) {
    drawShine(positions[i].x, positions[i].y, positions[i].s);
  }
}

function drawShine(x, y, s) {
  let color = 5;
  translate(x, y);
  scale(s);

  for (const a of arcs) {
    fill(color);
    scale(a.s);
    arc(0, 0, a.d, a.d, baseAngle + a.start, baseAngle + a.stop);
  }

  baseAngle += 1;
  color += 5;
  resetMatrix();
}
