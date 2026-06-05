const n = 30;
let x, y, hist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  x = width / 2;
  hist = [];
}

function draw() {
  clear();

  noStroke();
  fill(240);

  y = height / 2 + sin(frameCount / 20) * 100;
  hist.push({ x, y, d: 60 });

  if (hist.length > n) {
    hist.shift();
  }

  for (const h of hist) {
    h.x -= 20;
    h.d -= 4;
    circle(h.x, h.y, h.d);
  }
}
