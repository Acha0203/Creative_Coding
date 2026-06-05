const size = 20;
let d, x, y, angle, hist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  stroke(240);
  noFill();

  // 矩形の中央から頂点までの距離
  d = dist(0, 0, size, size);
  x = 0;
  y = height / 2;
  angle = 0;

  hist = [];
}

function draw() {
  clear();

  // 角度angleで矩形を描画する
  translate(x, y);
  rotate(angle);
  rect(0, 0, size * 2, size * 2);
  resetMatrix();

  // 矩形が画面内にいる間だけ位置の記録を行う
  if (x < width + size * 2) {
    const h = [];
    // 矩形の4つの頂点の位置を記録する
    for (let i = 0; i < 4; i++) {
      // 頂点の位置は45度からの90度刻みの、45度、135度、225度、315度になり、
      // 矩形は回転しているので、angleの下駄を履かせる
      const a = angle + 90 * i + 45;
      const tx = x + cos(a) * d;
      const ty = y + sin(a) * d;

      h.push({ x: tx, y: ty });
    }
    hist.push(h);
  }

  let prev = hist[0];
  for (let i = 1; i < hist.length; i++) {
    const cur = hist[i];
    for (let j = 0; j < 4; j++) {
      line(prev[j].x, prev[j].y, cur[j].x, cur[j].y);
    }
    prev = cur;
  }

  x++;
  angle += 0.6;
}
