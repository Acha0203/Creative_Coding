function setup() {
  createCanvas((H = windowHeight), H);
  colorMode(HSB);
  noFill();
}

function draw() {
  // clear();
  background(0, 0.03);

  strokeWeight(1);
  let direction = 5; // どちらの方向に動くかのフラグ
  for (let r = 0; r < TAU; r += PI / 8) {
    let angle = r + (sin(frameCount / 50) / 3) * direction;
    let length = noise(frameCount / 100) * 360;
    let x = cos(angle) * length + width / 2;
    let y = sin(angle) * length + height / 2;
    stroke((frameCount % 300) + direction, 50 + direction, 100);
    circle(x, y, frameCount % 300);
    direction = -direction; // 動く方向を反転する
  }
}
