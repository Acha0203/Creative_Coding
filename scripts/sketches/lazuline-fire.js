let pos = [];
let n = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(ADD);
  stroke(0, 0, 255, 10);
  initPosList();
}

function draw() {
  drawFlowField();
}

function mousePressed() {
  clear();
  initPosList();
  n = random(5, 20);
}

function initPosList() {
  pos = [];
  max = 1e4 + width * 5;

  for (let i = 0; i < max; i++) {
    pos.push({ x: random(width), y: random(height) });
  }
}

function drawFlowField() {
  for (let i = 0; i < pos.length; i++) {
    stroke(i / 100, i / 70, 255, 10);
    point(pos[i].x, pos[i].y);

    let angle = 0.5 - noise((pos[i].x / width) * n, (pos[i].y / height) * n, n);

    let dx = sin(angle);
    let dy = cos(angle);

    pos[i].x += dx;
    pos[i].y += dy;

    if (pos[i].y > height) continue;
  }
}
