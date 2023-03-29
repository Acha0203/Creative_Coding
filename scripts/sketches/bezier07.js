var x1, y1, x2, y2, x3, y3, x4, y4;
var increment = 0.1;

function setup() {
  createCanvas(400, 400);
  x1 = width / 2 - 100;
  y1 = height / 2;
  x2 = width / 2 - 50;
  y2 = height / 2 - 100;
  x3 = width / 2 + 50;
  y3 = height / 2 + 100;
  x4 = width / 2 + 100;
  y4 = height / 2;
  noFill();
  stroke(255);
  strokeWeight(2);
}

function draw() {
  background(0, 10);

  // 制御点を少しずつ変化させる
  x1 += random(-1, 1) * increment;
  y1 += random(-1, 1) * increment;
  x2 += random(-1, 1) * increment;
  y2 += random(-1, 1) * increment;
  x3 += random(-1, 1) * increment;
  y3 += random(-1, 1) * increment;
  x4 += random(-1, 1) * increment;
  y4 += random(-1, 1) * increment;

  // マウスカーソルの位置に基づいて変化させる
  x2 += (mouseX - x2) * increment;
  y2 += (mouseY - y2) * increment;
  x3 += (mouseX - x3) * increment;
  y3 += (mouseY - y3) * increment;

  // ベジェ曲線を描画
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}
