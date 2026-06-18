// 複素平面上の値の範囲を設定
// wの値を小さくするとズームできる
let w = 4;
let h = 0;
let xMin = 0;
let yMin = 0;

// 複素平面上の各点の最大反復回数を設定
let maxIterations = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  background(0);

  // 複素平面上の値の範囲を設定
  h = (w * height) / width;

  // 負の半幅と半高さから開始
  xMin = -w / 2;
  yMin = -h / 2;

  drawMandelbrotSet();
}

function mouseClicked() {
  // クリック位置をスクリーン座標 → 複素平面座標に変換
  let cx = xMin + (mouseX / width) * w;
  let cy = yMin + (mouseY / height) * h;

  // ズームイン（範囲を半分に）
  w = w / 2;
  h = h / 2;

  // クリック位置を新しい中心に設定
  xMin = cx - w / 2;
  yMin = cy - h / 2;

  drawMandelbrotSet();
}

function drawMandelbrotSet() {
  clear();
  background(0);

  console.log('Started!');

  // pixels[] 配列にアクセス
  loadPixels();

  // xは xMin から xMax まで
  let xMax = xMin + w;

  // yは yMin から yMax まで
  let yMax = yMin + h;

  // 各ピクセルのために x,y を増加させる量を計算
  let dx = (xMax - xMin) / width;
  let dy = (yMax - yMin) / height;

  // yの開始
  let y = yMin;
  for (let j = 0; j < height; j++) {
    // xの開始
    let x = xMin;
    for (let i = 0; i < width; i++) {
      // z = z^2 + cm の反復が発散するかどうかをテスト
      let a = x;
      let b = y;
      let iterations = 0;
      let result = calcMandelbrotSet({ a, b, x, y, iterations, maxIterations });

      // 無限大に達するまでの時間に基づいて各ピクセルに色を付ける

      let index = (i + j * width) * 4;

      // 反復回数を0-1の範囲に変換
      let normalized = map(result.iterations, 0, maxIterations, 0, 1);

      // 色の補間のために正規化された値の平方根を使用
      let lerpAmount = sqrt(normalized);

      // デフォルトの色
      let pixelColor = color(0, 0, 0);

      // 外側の色
      let startColor = color(20, 0, 80);

      // 明るい色
      let endColor = color(150, 150, 255);

      // 反復回数が最大未満の場合、色を補間
      if (result.iterations < maxIterations) {
        pixelColor = lerpColor(startColor, endColor, lerpAmount);
      }

      // 色からピクセルにRGBA値をコピー
      for (let i = 0; i < 4; i += 1) {
        pixels[index + i] = pixelColor.levels[i];
      }

      x += dx;
    }
    y += dy;
  }

  updatePixels();

  console.log('Completed!');
}

function calcMandelbrotSet({ a, b, x, y, iterations, maxIterations }) {
  let aSquared = a * a;
  let bSquared = b * b;

  // 値が大きすぎる場合、処理を停止（ベースケース）
  if (a * a + b * b > 4 || iterations >= maxIterations) {
    return { iterations };
  }

  let twoAB = 2.0 * a * b;

  a = aSquared - bSquared + x;
  b = twoAB + y;
  iterations += 1;

  return calcMandelbrotSet({ a, b, x, y, iterations, maxIterations });
}
