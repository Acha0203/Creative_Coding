s = 0.9;
let a;

function setup() {
  createCanvas((W = 500), W);
  rectMode(CENTER);
  noFill();
  a = 0;
}

function draw() {
  background(0, 10);
  translate(W / 2, W / 2);

  for (let i = 0; i < 25; i++) {
    scale(s);
    stroke(0, i * 10, i * 10);

    rotateRect(0, 0);
    rotateRect(-W / 3, -W / 3);
    rotateRect(W / 3, -W / 3);
    rotateRect(W / 3, W / 3);
    rotateRect(-W / 3, W / 3);
  }

  a += PI / 72;
}

function rotateRect(x, y) {
  push();
  translate(x, y);
  rotate(a);
  rect(0, 0, W, W);
  pop();
}
