let d, bgColor, circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  circleColor = color(random(255), random(255), random(255));
  reset();
}

function draw() {
  d += 4;
  // 円の半径が、画面中央から画面端までの直線距離より大きくなったらリセット
  if (d / 2 > dist(0, 0, width / 2, height / 2)) {
    reset();
  }

  background(bgColor);
  fill(circleColor);
  circle(width / 2, height / 2, d);
}

// リセットするたびに広がりきった円の色を背景に移し、円の色を変更する
function reset() {
  d = 0;
  bgColor = circleColor;
  circleColor = color(random(255), random(255), random(255));

  // 画面をマウスでクリックするとリセットする
  // function mouseClicked() {
  //   reset();
}
