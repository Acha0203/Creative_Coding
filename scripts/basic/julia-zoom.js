// 複素平面上の値の範囲を設定
// wの値を小さくするとズームできる
let w = 4;
let h = 0;
let xMin = 0;
let yMin = 0;

// 複素平面上の各点の最大反復回数を設定
let maxIterations = 400;

// ジュリア集合の定数 c = cReal + cImag * i
// let cReal = -0.7;
// let cImag = 0.27;

// let cReal = 0.285;
// let cImag = 0.01;

// let cReal = -0.4;
// let cImag = 0.6;

// let cReal = 0.0;
// let cImag = 0.8;

let cReal = -0.156844471694257101941;
let cImag = -0.649707745759247905171;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  background(0);

  // 複素平面上の値の範囲を設定
  h = (w * height) / width;

  // 負の半幅と半高さから開始
  xMin = -w / 2;
  yMin = -h / 2;

  drawJuliaSet();
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

  drawJuliaSet();
}

function drawJuliaSet() {
  clear();
  background(0);

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
      // 各ピクセルを z₀ の初期値として反復
      let a = x;
      let b = y;
      let iterations = 0;
      let result = calcJuliaSet({ a, b, cReal, cImag, iterations, maxIterations });

      // 無限大に達するまでの時間に基づいて各ピクセルに色を付ける

      let index = (i + j * width) * 4;

      // 反復回数を0-1の範囲に変換
      let normalized = map(result.iterations, 0, maxIterations, 0, 1);

      // 色の補間のために正規化された値の平方根を使用
      let lerpAmount = sqrt(normalized);

      // デフォルトの色
      let pixelColor = color(180, 255, 255);

      // 外側の色
      let startColor = color(0, 200, 160);

      // 明るい色
      let endColor = color(0, 120, 100);

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
}

function calcJuliaSet({ a, b, cReal, cImag, iterations, maxIterations }) {
  // 値が大きすぎる場合、処理を停止（ベースケース）
  if (a * a + b * b > 4 || iterations >= maxIterations) {
    return { iterations };
  }

  let aSquared = a * a;
  let bSquared = b * b;
  let twoAB = 2.0 * a * b;

  // z = z² + c （c は固定定数）
  a = aSquared - bSquared + cReal;
  b = twoAB + cImag;
  iterations += 1;

  return calcJuliaSet({ a, b, cReal, cImag, iterations, maxIterations });
}
