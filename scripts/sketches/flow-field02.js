function setup() {
  createCanvas((W = 500), W);
  blendMode(ADD);
  stroke(255, 0, 0, 10);

  pos = [];
  for (let i = 0; i < 1e4; i++) {
    pos[i] = { x: random(W), y: random(W) };
  }
}

function draw() {
  for (let i = 0; i < pos.length; i++) {
    point(pos[i].x, pos[i].y);

    let angle = 0.5 - noise((pos[i].x / W) * 5, (pos[i].y / W) * 5, 5);

    let dx = sin(angle);
    let dy = cos(angle);

    pos[i].x += dx;
    pos[i].y += dy;
  }
}
