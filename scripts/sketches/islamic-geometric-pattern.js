let layer1, layer2, layer3, layer4;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // sizeは基本となる正方形の1辺の長さ
  const rectSize = Math.floor(Math.min(width, height) * 0.6);
  // 基本となる正方形の対角線の長さ
  const rectDiagonal = rectSize * Math.sqrt(2);
  // 基本となる正方形の対角線上に描画する長方形の幅
  const rectWidth = rectSize / 5;
  // 基本となる正方形の対角線上に描画する長方形の長さ
  const rectHeight = rectSize * 2;

  layer1 = createGraphics(width, height);
  layer1.noStroke();
  layer1.rectMode(CENTER);
  layer1.translate(width / 2, height / 2);

  // 中心の十二芒星を描画
  drawCentralStar(rectWidth);

  // 周囲の五芒星を描画
  let angle = 0;

  for (let i = 0; i < 12; i++) {
    layer1.push();
    layer1.rotate(angle);
    drawTwelveStars(rectSize, rectDiagonal, rectWidth);
    layer1.pop();
    angle += HALF_PI / 3;
  }

  // layer2にイスラム文様を描画
  drawSquares(rectSize, rectWidth, rectHeight, 0, 0, 30, 100, 20, 30, 0, 100);

  // 枠の円を描画
  drawBlurFrame(rectDiagonal);

  image(layer2, 0, 0);
  image(layer1, 0, 0);
  image(layer3, 0, 0);
}

function drawCentralStar(rectWidth) {
  layer1.fill(60, 80, 30);
  layer1.push();
  layer1.rotate(QUARTER_PI);

  for (let i = 0; i < 3; i++) {
    layer1.rotate(HALF_PI / 3);
    layer1.push();
    layer1.square(0, 0, rectWidth - 7);
    layer1.rotate(QUARTER_PI);
    layer1.pop();
  }

  layer1.pop();
}

function drawBlurFrame(radius) {
  layer3 = createGraphics(width, height);

  layer3.noStroke();
  layer3.fill(255, 255, 255);
  layer3.rect(0, 0, width, height);
  layer3.translate(width / 2, height / 2);
  layer3.erase();
  layer3.circle(0, 0, radius * 0.85);
  layer3.filter(BLUR, 30);
  layer3.noErase();
}

function drawGradation(layer, radius, r1, g1, b1, a1, r2, g2, b2, a2) {
  let from = color(r1, g1, b1, a1);
  let to = color(r2, g2, b2, a2);

  layer.noFill();
  layer.strokeWeight(1);

  for (let i = 0; i < radius; i++) {
    let interColor = lerpColor(from, to, i / radius);

    layer.stroke(interColor);
    layer.circle(0, 0, radius - i);
  }
}

function drawSquares(rectSize, rectWidth, rectHeight, r1, g1, b1, a1, r2, g2, b2, a2) {
  layer2 = createGraphics(width, height);
  layer2.rectMode(CENTER);
  layer2.blendMode(BLEND);
  layer2.background(100, 100, 100);
  layer2.blendMode(ADD);
  layer2.stroke(255, 255, 255);
  layer2.strokeWeight(10);
  layer2.fill(r1, g1, b1, a1);
  layer2.translate(width / 2, height / 2);

  for (let i = 0; i < 3; i++) {
    layer2.rotate(HALF_PI / 3);

    layer2.push();
    layer2.square(0, 0, rectSize);
    layer2.fill(r2, g2, b2, a2);
    layer2.rotate(QUARTER_PI);
    layer2.rect(0, 0, rectHeight, rectWidth);
    layer2.rotate(HALF_PI);
    layer2.rect(0, 0, rectHeight, rectWidth);
    layer2.rotate(HALF_PI / 3);
    layer2.pop();
  }

  drawGradation(layer2, rectSize * 1.5, 10, 0, 100, 150, 50, 70, 0, 0);
}

function drawTwelveStars(rectSize, rectDiagonal, rectWidth) {
  // 五芒星を構成する三角形の1つTriangleAを描画
  const heightOfTriangleA = (rectDiagonal - rectSize) / 2 / 3;
  const baseOfTriangleA = heightOfTriangleA * tan(PI / 3);
  const valueToAdjustTriangleA = 4;

  layer1.fill(90, 100, 30);

  layer1.triangle(
    0,
    -(rectSize / 2 + heightOfTriangleA),
    -baseOfTriangleA + valueToAdjustTriangleA,
    -(rectSize / 2 + valueToAdjustTriangleA),
    baseOfTriangleA - valueToAdjustTriangleA,
    -(rectSize / 2 + valueToAdjustTriangleA),
  );

  // 五芒星を構成する残り2つの三角形、TriangleBを描画
  // 3つの正方形で構成される正十二角形の1辺の長さの半分
  const halfOfDodecagonSide = (rectDiagonal / 2) * cos(QUARTER_PI + HALF_PI / 3);
  // 正十二角形を構成する12個の三角形の高さ
  const heightOfDodecagonTriangle = Math.sqrt(
    Math.pow(rectDiagonal / 2, 2) - Math.pow(halfOfDodecagonSide, 2),
  );
  // 中心からTriangleBの下の角までの距離
  const lengthFromCenter = rectWidth / 2 / cos(QUARTER_PI + HALF_PI / 3);
  // TriangleBの上の角のX座標
  const topXOfTriangleB =
    halfOfDodecagonSide - Math.sqrt(Math.pow(rectWidth / 2, 2) * 2) * cos(HALF_PI / 3);
  // TriangleBの上の角のY座標
  const topYOfTriangleB =
    heightOfDodecagonTriangle - Math.sqrt(Math.pow(rectWidth / 2, 2) * 2) * cos(PI / 3);

  // 内側の正十二角形の1辺の長さの半分
  const halfOfInnerDodecagonSide = (rectSize / 2) * tan(QUARTER_PI / 3);
  // 長方形の中心からTriangleBの中間の角までの距離
  const lengthFromRectangleCenter = (rectWidth / 2 / cos(QUARTER_PI / 3)) * cos(HALF_PI / 3);
  // TriangleBの中間の角のX座標
  const middleXOfTriangleB = halfOfInnerDodecagonSide - lengthFromRectangleCenter;
  // TriangleBの中間の角のY座標
  const middleYOfTriangleB = rectSize / 2 + lengthFromRectangleCenter * tan(HALF_PI / 3);
  const valueToAdjustTriangleB = 6;

  for (let i = -1; i < 2; i += 2) {
    layer1.triangle(
      0,
      -lengthFromCenter - valueToAdjustTriangleB * 2,
      (topXOfTriangleB - valueToAdjustTriangleB) * i,
      -topYOfTriangleB + valueToAdjustTriangleB,
      (-middleXOfTriangleB + valueToAdjustTriangleB / 2) * i,
      -middleYOfTriangleB + valueToAdjustTriangleB / 2,
    );
  }
}

// #minacoding 2026 June 19th, Coaster
