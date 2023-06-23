// p5.disableFriendlyErrors = true;

let pattern, layer1, layer2;
N = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  pattern = createGraphics(width, height);
  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width, height, WEBGL);

  pattern.background(0);
  pattern.stroke(255);
  drawAll(pattern);
}

function draw() {
  clear();
  blendMode(MULTIPLY);

  drawBackground(layer1, N);
  drawAinuSphere(layer2);

  image(layer1, 0, 0);
  image(layer2, 0, 0);
}

class AinuPattern {
  constructor(layer, cx, cy) {
    this.layer = layer;
    this.cx = cx;
    this.cy = cy;
  }

  drawSpiral(centerX, maxRadian, direction) {
    const spiralCenterX = centerX * direction;
    for (let r = 0; r < maxRadian; r += PI / 100) {
      const p = (r * height) / 100;
      const x = Math.cos(r) * p * direction + (this.cx - spiralCenterX);
      const y = Math.sin(r) * p + this.cy;
      this.layer.strokeWeight(r + height / 64);
      this.layer.point(x, y);
    }
  }

  drawKnot(size, thickness, spiralRadian, maxRadian, direction) {
    const spiralCenterY =
      Math.sin(spiralRadian) * spiralRadian * (height / 100);

    for (let r = 1.5 * PI; r < maxRadian; r += PI / 100) {
      const x = Math.pow(Math.cos(r), 3) * size * direction + this.cx;
      const y =
        Math.pow(Math.sin(r), 3) * size +
        this.cy +
        spiralCenterY +
        height / 520;
      this.layer.strokeWeight(r * thickness);
      this.layer.point(x, y);
    }
  }

  drawThorn(direction) {
    const startPointX = Math.cos(2 * PI) * (height / 14) * direction;

    for (let i = 0; i < height / 2; i += 1) {
      const r = i * (PI / (height / 4));
      const x = Math.cos(r) * (height / 14) * direction + this.cx - startPointX;
      const y = i + Math.cos(r) * (height / 40) + this.cy - height / 150;
      this.layer.strokeWeight(height / 30 - r);
      this.layer.point(x, y);
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

function drawAll(layer) {
  layer.background(0);
  layer.translate(width / 2, height / 2);
  layer.scale(0.4);
  layer.rotate(HALF_PI / 2);

  const ainuPatternA = new AinuPattern(layer, 0, -height * 0.6);
  const ainuPatternB = new AinuPattern(layer, 0, -height * 0.4);

  for (let i = 0; i < 4; i++) {
    layer.rotate(HALF_PI * i);
    ainuPatternA.drawPatternA();
  }

  layer.scale(1.1);
  layer.rotate(HALF_PI / 2);

  for (let i = 0; i < 4; i++) {
    layer.rotate(HALF_PI * i);
    ainuPatternB.drawPatternB();
  }
}

function drawAinuSphere(layer) {
  layer.clear();
  layer.background(0);
  layer.blendMode(SCREEN);
  layer.noStroke();
  layer.lights();
  layer.texture(pattern);

  layer.push();
  layer.rotateY(frameCount * 0.1);
  // layer.sphere(height / 12);
  // layer.rotateY(frameCount * 0.1);
  // layer.sphere(height / 8);
  // layer.pop();
  // layer.push();
  // layer.rotateY(frameCount * 0.1);
  // layer.sphere(height / 6);
  // layer.pop();
  // layer.push();
  // layer.rotateX(frameCount * 0.1);
  // layer.sphere((height * 5) / 24);
  // layer.rotateY(frameCount * -0.1);
  layer.sphere(height / 4);
  layer.pop();
}

function drawBackground(layer, n) {
  layer.colorMode(HSB);
  layer.noStroke();
  const step = width / n;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let p = Math.sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      layer.fill(210 + p * 60, n, n);
      layer.rect(step * i, step * j, step);
    }
  }
}

// #つぶやきProcessing #p5js #minacoding Day 24
