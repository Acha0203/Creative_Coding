function setup() {
  createCanvas(720, 720);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0, 0.05);

  fill(frameCount % 360, 80, 100);
  var direction = 1; // どちらの方向に動くかのフラグ
  for (var r = 0; r < TAU; r += PI / 8) {
    var angle = r + (sin(frameCount / 50) / 3) * direction;
    var length = noise(frameCount / 100) * 500;
    var x = cos(angle) * length + width / 2;
    var y = sin(angle) * length + height / 2;
    circle(x, y, length / 20);
    direction = -direction; // 動く方向を反転する
  }
}
