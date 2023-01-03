let h,
  a1,
  a2,
  r = 50,
  H = 300,
  L = 150;

function setup() {
  createCanvas((W = 600), W);
  noFill();

  (a1 = 0), (a2 = 0), (h = []);
}

function draw() {
  clear();

  a1 += 0.1;
  a2 += 0.05;

  const x1 = cos(a1) * r;
  const y1 = H + sin(a1) * r;
  const l = h.length;
  const v = createVector(L + cos(a2) * r - x1, H + sin(a2) * r - y1);
  v.setMag(x1 + H);
  h.push({ x: x1 + v.x, y: y1 + v.y });
  if (l > L) {
    h.shift();
  }

  for (let i = 0; i < l - 1; i++) {
    circle(h[i].x, h[i].y, i);
    stroke(i);
  }
}
