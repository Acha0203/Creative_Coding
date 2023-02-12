function setup() {
  createCanvas((w = 500), w);
  background(0);
  stroke(255, 10);
  strokeWeight(1);

  pos = [];
  for (let i = 0; i < 5000; i++) {
    pos[i] = { x: random(w), y: random(w) };
  }
}

function draw() {
  for (let i = 0; i < pos.length; i++) {
    point(pos[i].x, pos[i].y);

    let dx = sin(0.5 - noise((pos[i].x / w) * 15, (pos[i].y / w) * 15, 0.1));
    let dy = cos(0.5 - noise((pos[i].x / w) * 15, (pos[i].y / w) * 15, 30));
    // let dy = 0.5 - noise((pos[i].x / w) * 15, (pos[i].y / w) * 15, 7.2);

    pos[i].x += dx;
    pos[i].y += dy;
  }
}