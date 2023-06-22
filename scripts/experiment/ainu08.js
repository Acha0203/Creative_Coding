let layer1, layer2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width * 2, height * 2);

  layer1.background(0, 50, 255);
  layer2.noStroke();
  displayAll();
}

function draw() {
  clear();

  drawBackground(100);
  image(layer1, 0, 0);

  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  image(layer2, 0, 0);
  pop();
}

class AinuPattern {
  constructor(cx, cy) {
    this.cx = cx;
    this.cy = cy;
  }

  drawSpiral(centerX, maxRadian, direction) {
    const spiralCenterX = centerX * direction;
    for (let r = 0; r < maxRadian; r += PI / 180) {
      const p = (r * height) / 100;
      const x = Math.cos(r) * p * direction + (this.cx - spiralCenterX);
      const y = Math.sin(r) * p + this.cy;
      layer2.circle(x, y, r + height / 64);
    }
  }

  drawKnot(size, thickness, spiralRadian, maxRadian, direction) {
    const spiralCenterY =
      Math.sin(spiralRadian) * spiralRadian * (height / 100);

    for (let r = 1.5 * PI; r < maxRadian; r += PI / 180) {
      const x = Math.pow(Math.cos(r), 3) * size * direction + this.cx;
      const y =
        Math.pow(Math.sin(r), 3) * size +
        this.cy +
        spiralCenterY +
        height / 520;
      layer2.circle(x, y, r * thickness);
    }
  }

  drawThorn(direction) {
    const startPointX = Math.cos(2 * PI) * (height / 14) * direction;
    for (let i = 0; i < height / 2; i += 1) {
      const r = i * (PI / (height / 4));
      const x = Math.cos(r) * (height / 14) * direction + this.cx - startPointX;
      const y = i + Math.cos(r) * (height / 40) + this.cy - height / 150;
      layer2.circle(x, y, height / 30 - r);
    }
  }

  drawPatternA() {
    const r = TAU * 2.02;
    this.drawSpiral((Math.cos(r) * r * height) / 100, r, 1);
    this.drawSpiral((Math.cos(r) * r * height) / 100, r, -1);
    this.drawKnot(height / 7, height / 260, TAU * 1.75, TAU, 1);
    this.drawKnot(height / 7, height / 260, TAU * 1.75, TAU, -1);
    this.drawThorn(1);
    this.drawThorn(-1);
  }

  drawPatternB() {
    this.drawSpiral(
      (Math.cos(TAU) * TAU * height) / 100 + TAU + height / 256,
      TAU * 1.72,
      1
    );
    this.drawSpiral(
      (Math.cos(TAU) * TAU * height) / 100 + TAU + height / 256,
      TAU * 1.72,
      -1
    );
    this.drawKnot(height / 10, height / 220, TAU * 1.73, (TAU * 35) / 36, 1);
    this.drawKnot(height / 10, height / 220, TAU * 1.73, (TAU * 35) / 36, -1);
    this.drawKnot(height / 20, height / 250, TAU * 1.58, (TAU * 35) / 36, 1);
    this.drawKnot(height / 20, height / 250, TAU * 1.58, (TAU * 35) / 36, -1);
  }
}

function displayAll() {
  layer2.background(0);
  layer2.translate(width, height);
  layer2.scale(0.5);
  layer2.rotate(HALF_PI / 2);
  layer2.erase(255);

  const ainuPatternA = new AinuPattern(0, -height * 0.6);
  const ainuPatternB = new AinuPattern(0, -height * 0.4);

  for (let i = 0; i < 4; i++) {
    layer2.rotate(HALF_PI * i);
    ainuPatternA.drawPatternA();
  }

  layer2.scale(1.1);
  layer2.rotate(HALF_PI / 2);

  for (let i = 0; i < 4; i++) {
    layer2.rotate(HALF_PI * i);
    ainuPatternB.drawPatternB();
  }
}

function drawBackground(N) {
  layer1.colorMode(HSB);
  layer1.noStroke();
  const step = width / N;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let p = Math.sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      layer1.fill(210 + p * 50, N, N);
      layer1.rect(step * i, step * j, step);
    }
  }
}

// minacoding Day 22: テーマ「人間」5日目
