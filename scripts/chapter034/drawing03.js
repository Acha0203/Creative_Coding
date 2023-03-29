const t0 = 0.8; // 対象のピクセルと周りの色を補間する際に必要な係数
const t1 = 0.02; // 上で補間した色と筆の色を補間する際に必要な係数
const mainColor = [255, 100, 0]; // 筆の色
const n = 10; // 補間する回数
const d = 15; // 上下左右の近くのピクセルの色を取る際の距離
const white = [255, 255, 255]; // 白色の配列表現
let prev;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noFill();
  background(255);

  prev = { x: 0, y: 0 };
}

function draw() {
  if (mouseIsPressed) {
    // 描くのは画面内の座標にマウスがある場合だけ
    if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY >= height) {
      return;
    }

    // 前回の座標から今のマウス座標までを補間するために分割して円を描画する
    for (let i = 0; i < n; i++) {
      const t = i / n; // 補間係数

      // 補間した座標を計算し、その座標のピクセルからRGBを取り出す
      const x = lerp(prev.x, mouseX, t);
      const y = lerp(prev.y, mouseY, t);
      const pixel = get(x, y);
      let r = red(pixel);
      let g = green(pixel);
      let b = blue(pixel);

      // 近くの上下左右のピクセルを取り出す。無いなら白にする
      const left = x - d >= 0 ? get(x - d, y) : white;
      const right = x + d < width ? get(x + d, y) : white;
      const top = y - d >= 0 ? get(x, y - d) : white;
      const bottom = y + d < height ? get(x, y + d) : white;

      // 上下左右のピクセルの平均色を計算
      const avgR = (left[0] + right[0] + top[0] + bottom[0]) / 4;
      const avgG = (left[1] + right[1] + top[1] + bottom[1]) / 4;
      const avgB = (left[2] + right[2] + top[2] + bottom[2]) / 4;

      // 現在の色と平均色をt0で補間する
      r = lerp(r, avgR, t0);
      g = lerp(g, avgG, t0);
      b = lerp(b, avgB, t0);

      // 現在の色と筆の色をt1で補間する
      r = lerp(r, mainColor[0], t1);
      g = lerp(g, mainColor[1], t1);
      b = lerp(b, mainColor[2], t1);

      fill(r, g, b);
      circle(x, y, 30);
    }
  }

  prev.x = mouseX;
  prev.y = mouseY;
}
