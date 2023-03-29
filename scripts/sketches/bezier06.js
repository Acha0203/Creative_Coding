function setup() {
  createCanvas(400, 400);
  background(0);
  noFill();
}

function draw() {
  // 制御点をランダムに生成
  var x1 = random(width);
  var y1 = random(height);
  var x2 = random(width);
  var y2 = random(height);
  var x3 = random(width);
  var y3 = random(height);
  var x4 = random(width);
  var y4 = random(height);

  // ランダムな色を設定
  stroke(random(255));
  strokeWeight(random(1, 10));

  // ベジェ曲線を描画
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}
