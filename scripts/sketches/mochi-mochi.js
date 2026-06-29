const springing = 0.0009;
const damping = 0.98;
const pushSpring = 0.04;
const pushDamping = 0.85;
const maxRadius = 100;
const minRadius = 30;
let shapes = [];

class Shape {
  constructor() {
    this.baseCenterX = 0;
    this.baseCenterY = 0;
    this.currentCenterX = this.baseCenterX;
    this.currentCenterY = this.baseCenterY;
    this.radius = minRadius;
    this.nodes = 6;
    this.rotAngle = -90;
    this.deltaX = 0;
    this.deltaY = 0;
    this.accelX = 0;
    this.accelY = 0;
    this.organicConstant = 1;
    this.hue = random(120, 280);

    this.pushOffsetX = 0;
    this.pushOffsetY = 0;
    this.pushVelX = 0;
    this.pushVelY = 0;
    this.pushTargetX = 0;
    this.pushTargetY = 0;

    this.nodeStartX = [];
    this.nodeStartY = [];
    this.nodeX = [];
    this.nodeY = [];
    this.angle = [];
    this.frequency = [];
  }

  initShapes() {
    // 各シェイプの基本座標の初期化
    let i = 0;
    let x = 0;
    let y = 0;
    let r = minRadius;

    do {
      x = random(width);
      y = random(height);

      i++;

      if (i > 1000) {
        return;
      }
    } while (!this.hasOverlap(x, y, r));

    while (r < maxRadius && this.hasOverlap(x, y, r)) {
      r++;
    }

    r--;

    this.baseCenterX = x;
    this.baseCenterY = y;
    this.radius = r;

    // 角のノードの座標を初期化
    for (let i = 0; i < this.nodes; i++) {
      this.nodeStartX[i] = 0;
      this.nodeStartY[i] = 0;
      this.nodeX[i] = 0;
      this.nodeY[i] = 0;
      this.angle[i] = 0;
    }

    // 角のノードの周波数を初期化
    for (let i = 0; i < this.nodes; i++) {
      this.frequency[i] = random(5, 12);
    }
  }

  hasOverlap(x, y, radius) {
    let ok = true;

    shapes.forEach((s) => {
      if (dist(x, y, s.baseCenterX, s.baseCenterY) < radius + s.radius) {
        ok = false;
      }
    });

    return ok;
  }

  applyPush(mx, my) {
    const dx = this.currentCenterX - mx;
    const dy = this.currentCenterY - my;
    const d = sqrt(dx * dx + dy * dy);

    if (d === 0) return;

    const magnitude = this.radius / 2;
    this.pushTargetX = (dx / d) * magnitude;
    this.pushTargetY = (dy / d) * magnitude;
  }

  drawShape() {
    const cx = this.currentCenterX + this.pushOffsetX;
    const cy = this.currentCenterY + this.pushOffsetY;

    for (let i = 0; i < this.nodes; i++) {
      this.nodeStartX[i] = cx + cos(this.rotAngle) * this.radius;
      this.nodeStartY[i] = cy + sin(this.rotAngle) * this.radius;
      this.rotAngle += 360.0 / this.nodes;
    }

    curveTightness(this.organicConstant);

    // グローエフェクトに使用する色の設定
    const glowColor = color(this.hue, 100, 100);

    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = this.radius / 2;
    drawingContext.shadowColor = glowColor;
    fill(this.hue, 20, 100, 100);

    beginShape();

    for (let i = 0; i < this.nodes; i++) {
      curveVertex(this.nodeX[i], this.nodeY[i]);
    }

    endShape(CLOSE);
  }

  moveShape() {
    // 中心点を移動
    this.deltaX = (mouseX - this.currentCenterX) * 0.1;
    this.deltaY = (mouseY - this.currentCenterY) * 0.1;

    // バネ効果を作成
    this.deltaX *= springing;
    this.deltaY *= springing;
    this.accelX += this.deltaX;
    this.accelY += this.deltaY;

    // 中心を移動
    this.currentCenterX = constrain(
      this.currentCenterX + this.accelX,
      this.baseCenterX - 20,
      this.baseCenterX + 20,
    );
    this.currentCenterY = constrain(
      this.currentCenterY + this.accelY,
      this.baseCenterY - 20,
      this.baseCenterY + 20,
    );

    // バネの動きを遅くする
    this.accelX *= damping;
    this.accelY *= damping;

    // 全体の加速度に基づいて曲線の緊張度を変更;
    // abs()を使用して加速度の方向に依存しないようにする
    const totalAccelX = this.accelX + this.pushVelX;
    const totalAccelY = this.accelY + this.pushVelY;

    this.organicConstant = 1 - (abs(totalAccelX) + abs(totalAccelY)) * 0.1;

    for (let i = 0; i < this.nodes; i++) {
      this.nodeX[i] = this.nodeStartX[i] + sin(this.angle[i]) * (totalAccelX * 2);
      this.nodeY[i] = this.nodeStartY[i] + sin(this.angle[i]) * (totalAccelY * 2);
      this.angle[i] += this.frequency[i];
    }

    this.pushVelX += (this.pushTargetX - this.pushOffsetX) * pushSpring;
    this.pushVelY += (this.pushTargetY - this.pushOffsetY) * pushSpring;
    this.pushVelX *= pushDamping;
    this.pushVelY *= pushDamping;
    this.pushOffsetX += this.pushVelX;
    this.pushOffsetY += this.pushVelY;
    this.pushTargetX *= 0.99;
    this.pushTargetY *= 0.99;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  noStroke();

  const numberOfShapes = floor(max(width, height) / 20);

  for (let i = 0; i < numberOfShapes; i++) {
    shapes.push(new Shape());
  }

  for (const s of shapes) {
    s.initShapes();
  }
}

function draw() {
  background(0, 0, 100);

  for (const s of shapes) {
    s.drawShape();
    s.moveShape();
  }
}

function mousePressed() {
  for (const s of shapes) {
    const cx = s.currentCenterX + s.pushOffsetX;
    const cy = s.currentCenterY + s.pushOffsetY;

    if (dist(mouseX, mouseY, cx, cy) < s.radius) {
      s.applyPush(mouseX, mouseY);
    }
  }
}

// #minacoding 2026 June 26th, Mochi-Mochi
