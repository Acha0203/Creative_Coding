function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  noFill();
}

function draw() {
  background(0, 0.03);

  stroke(frameCount % 360, 80, 100);
  var direction = 1; // どちらの方向に動くかのフラグ
  for (var r = 0; r < TAU; r += PI / 8) {
    var angle = r + (sin(frameCount / 50) / 3) * direction;
    var length = noise(frameCount / 100) * 360;
    var x = cos(angle) * length + width / 2;
    var y = sin(angle) * length + height / 2;
    circle(x, y, frameCount % 360);
    direction = -direction; // 動く方向を反転する
  }
}
