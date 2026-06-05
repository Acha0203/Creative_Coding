let rx, ry, angleX, angleY, speedX, speedY, px, py, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  angle = 0;
  // 2つの円の半径、円運動のための角度と角度を更新する速度を用意する
  rx = random(width / 4, width / 2);
  ry = random(height / 4, height / 2);
  angleX = random(TWO_PI);
  angleY = random(TWO_PI);
  speedX = random(0.04, 0.08);
  speedY = random(0.04, 0.08);

  px = width / 2 + cos(angleX) * rx;
  py = height / 2 + sin(angleY) * ry;
}

function draw() {
  const x = width / 2 + cos(angleX) * rx;
  const y = height / 2 + sin(angleY) * ry;
  line(px, py, x, y);

  angleX += speedX;
  angleY += speedY;

  px = x;
  py = y;
}
