const n = 24;
const r = 100;
let circles = [];

function setup() {
  createCanvas((W = 500), W);
  colorMode(HSB);
  noStroke();

  for (let y = -6; y < n; y++) {
    for (let x = -6; x < n; x++) {
      const tx = (1000 / (n - 1)) * x;
      const ty = (1000 / (n - 1)) * y;

      circles.push({ x: tx, y: ty });
    }
  }
}

function draw() {
  background(0, 0.01);
  fill(frameCount % 360, 80, 100);

  for (let c of circles) {
    const v = createVector(mouseX - c.x, mouseY - c.y);
    v.setMag(min(v.mag(), r));
    const tx = c.x + v.x;
    const ty = c.y + v.y;

    circle(tx, ty, 10);
  }
}
