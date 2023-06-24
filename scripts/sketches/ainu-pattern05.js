p5.disableFriendlyErrors = true;

let layer1, layer2, ainuPatternA, ainuPatternB;

function setup() {
  createCanvas(windowWidth, windowHeight);

  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width, height);

  layer1.background(0);
  layer2.noStroke();
  layer2.background(0);
}

function draw() {
  clear();

  drawBackground(layer1, 100);
  image(layer1, 0, 0);

  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  image(layer2, 0, 0);
  pop();

  drawAll(layer2);
}

class AinuPattern {
  constructor(layer, cx, cy) {
    this.layer = layer;
    this.cx = cx;
    this.cy = cy;
  }

  drawSpiral(centerX, maxRadian, direction) {
    const spiralCenterX = centerX * direction;
    for (let r = 0; r < maxRadian; r += PI / 180) {
      const p = (r * height) / 100;
      const x = Math.cos(r) * p * direction + (this.cx - spiralCenterX);
      const y = Math.sin(r) * p + this.cy;
      this.layer.circle(x, y, r + height / 64);
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
      this.layer.circle(x, y, r * thickness);
    }
  }

  drawThorn(direction) {
    const startPointX = Math.cos(2 * PI) * (height / 14) * direction;

    for (let i = 0; i < height / 2; i += 1) {
      const r = i * (PI / (height / 4));
      const x = Math.cos(r) * (height / 14) * direction + this.cx - startPointX;
      const y = i + Math.cos(r) * (height / 40) + this.cy - height / 150;
      this.layer.circle(x, y, height / 30 - r);
    }
  }

  drawPatternA() {
    const maxRadian = TAU * 2.02;
    const centerX = (Math.cos(maxRadian) * maxRadian * height) / 100;
    const size = height / 7;
    const thickness = height / 260;
    const spiralRadian = TAU * 1.75;

    this.drawSpiral(centerX, maxRadian, 1);
    this.drawSpiral(centerX, maxRadian, -1);
    this.drawKnot(size, thickness, spiralRadian, TAU, 1);
    this.drawKnot(size, thickness, spiralRadian, TAU, -1);
    this.drawThorn(1);
    this.drawThorn(-1);
  }

  drawPatternB() {
    const centerX = (Math.cos(TAU) * TAU * height) / 100 + TAU + height / 256;
    let maxRadian = TAU * 1.72;

    this.drawSpiral(centerX, maxRadian, 1);
    this.drawSpiral(centerX, maxRadian, -1);

    let size = height / 10;
    let thickness = height / 220;
    let spiralRadian = TAU * 1.73;
    maxRadian = (TAU * 35) / 36;

    this.drawKnot(size, thickness, spiralRadian, maxRadian, 1);
    this.drawKnot(size, thickness, spiralRadian, maxRadian, -1);

    size = height / 20;
    thickness = height / 250;
    spiralRadian = TAU * 1.58;

    this.drawKnot(size, thickness, spiralRadian, maxRadian, 1);
    this.drawKnot(size, thickness, spiralRadian, maxRadian, -1);
  }
}

function drawAll(layer) {
  const ainuPatternA = new AinuPattern(layer, 0, -height * 0.6);
  const ainuPatternB = new AinuPattern(layer, 0, -height * 0.4);

  layer.background(0, 20);
  layer.erase(200);

  layer.push();
  layer.translate(width / 2, height / 2);
  layer.scale(0.4);
  layer.rotate(frameCount * 0.03);

  layer.scale(0.4 + (frameCount % 60) * 0.03);

  for (let i = 0; i < 4; i++) {
    layer.rotate(HALF_PI * i);
    ainuPatternA.drawPatternA();
  }
  layer.pop();

  layer.push();
  layer.translate(width / 2, height / 2);
  layer.scale(0.46);
  layer.rotate(HALF_PI / 2 + frameCount * 0.03);

  layer.scale(0.4 + (frameCount % 60) * 0.03);

  for (let i = 0; i < 4; i++) {
    layer.rotate(HALF_PI * i);
    ainuPatternB.drawPatternB();
  }
  layer.pop();
}

function drawBackground(layer, n) {
  layer.colorMode(HSB);
  layer.noStroke();
  const step = width / n;
  const m = height / step;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let p = Math.sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      layer.fill(210 + p * 60, 100, 100);
      layer.rect(step * i, (height / m) * j, step);
    }
  }
}

// minacoding Day 24: テーマ「人間」7日目
