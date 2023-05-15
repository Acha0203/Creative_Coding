const r = 100;
let points;

function setup() {
  createCanvas(windowWidth, windowHeight);

  points = [];

  for (let i = 0; i < 20; i++) {
    points.push({ x: random(width), y: random(height) });
  }
}

function draw() {
  clear();

  points.forEach((p) => {
    noStroke();

    const d = dist(p.x, p.y, mouseX, mouseY);

    if (d <= r) {
      fill('#ff9900');
    } else {
      fill(240);
    }

    circle(p.x, p.y, 10);
  });

  stroke(240);
  noFill();
  circle(mouseX, mouseY, r * 2);
}
