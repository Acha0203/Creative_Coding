let segments; // 放電の分割数

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  // 放電の分割数を高さに基づいて設定
  segments = height / 40;
}

function draw() {
  blendMode(BLEND);
  background(0, 0.1);
  blendMode(ADD);

  // 放電の軌跡を描画
  if (random() < 0.05) {
    drawLightning(segments);
  }
}

function drawLightning(segments) {
  const start = frameCount;

  noFill();

  beginShape();

  const X1 = random(0, width);
  const X2 = X1;

  // 奥行きを持たせるために放電のサイズをランダムに生成する
  const ratio = random(0.6, 1);
  const Y1 = 0;
  const Y2 = height * ratio;

  stroke(200, 90, 90 * ratio);
  strokeWeight((ratio * width) / 80);
  vertex(X1, Y1);

  for (let i = 1; i < segments; i++) {
    const t = i / segments;

    // 直線上の基本座標を計算
    const bx = lerp(X1, X2, t);
    const by = lerp(Y1, Y2, t);

    // 中心の膨らみに向かってランダムなズレ（ノイズ）を加える
    const wave = sin(t * PI) * 30;
    const offset = map(noise(frameCount * 0.1, i), 0, 1, -wave, wave);

    vertex(bx + offset, by + random(-10, 10));
  }

  vertex(X2, Y2);
  endShape();

  drawSparkle(X2, Y2, (width / 3) * ratio, ratio);
}

function drawSparkle(x, y, maxRadius, ratio) {
  push();
  noStroke();

  for (let r = 0; r < maxRadius; r++) {
    fill(200, 90, (90 - r * (90 / maxRadius)) * ratio, 0.02);
    arc(x, y + 5, r, r, PI, TWO_PI);
  }

  pop();
}

// #minacoding 2026 June 9th, Magic
// I created this based on the image of Candeon, the magic from the original FC version of Megami Tensei.
