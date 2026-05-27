function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  blendMode(BLEND);
  background(0, 0.05);
  blendMode(ADD);

  let direction = 5; // どちらの方向に動くかのフラグ

  for (let r = 0; r < TAU; r += PI / 4) {
    let angle = r + (cos(frameCount / 50) / 3) * direction;
    let length = noise(frameCount / 90) * 360;
    let x = tan(cos(angle)) * length + width / 2;
    let y = tan(sin(angle)) * length + height / 2;
    fill(color((frameCount % 360) * r * 0.1, 80 + r, r));
    circle(x, y, frameCount % 360);
    direction = -direction; // 動く方向を反転する
  }
}

// #minacoding 2026 June 1 Circle
