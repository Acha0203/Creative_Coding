let a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();
}

function draw() {
  background(0, 0.1);
  stroke(frameCount % 360, 100, 100, 0.5);

  translate(width / 2, height / 2);
  rotate(a);

  // 重心を原点とした相対座標
  // 重心から頂点まで 2/3、重心から対辺まで 1/3
  const oneSide = width * 0.4;
  const tHeight = (oneSide / 2) * sqrt(3);
  const x1 = -oneSide / 2;
  const y1 = -tHeight / 3;
  const x2 = oneSide / 2;
  const y2 = y1;
  const x3 = 0;
  const y3 = (tHeight * 2) / 3;

  triangle(x1, y1, x2, y2, x3, y3);

  a += PI / 72;
}
