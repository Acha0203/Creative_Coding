let x, y, vx, vy;
const angle = 30; // 度
const speed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // 度数法で扱う形式に変える

  x = width / 2;
  y = height / 2;

  vx = cos(angle) * speed;
  vy = sin(angle) * speed;
}

function draw() {
  clear();
  circle(x, y, 40);

  x += vx;
  y += vy;
}
