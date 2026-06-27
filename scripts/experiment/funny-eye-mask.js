let eyeLidLayer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();

  const eyeWidth = width * 0.35;

  eyeLidLayer = createGraphics(width, height);
  eyes = new Eyes(eyeWidth, eyeWidth, eyeLidLayer);
}

function draw() {
  background(255, 220, 180);

  const eyeWidth = width * 0.35;

  // 左右の白目を描画
  eyes.drawWhiteOfEye(eyes.leftEyeX);
  eyes.drawWhiteOfEye(eyes.rightEyeX);

  // 左右の黒目を描画
  eyes.drawIris(eyes.leftEyeX + eyes.irisWidth / 2, eyes.eyesY);
  eyes.drawIris(eyes.rightEyeX - eyes.irisWidth / 2, eyes.eyesY);

  eyes.blink();
  image(eyeLidLayer, 0, 0);
}

class Eyes {
  constructor(eyeWidth, eyeHeight, eyeLidLayer) {
    this.eyeWidth = eyeWidth;
    this.eyeHeight = eyeHeight;
    this.rightEyeX = width / 2 + eyeWidth * 0.65;
    this.leftEyeX = width / 2 - eyeWidth * 0.65;
    this.eyesY = height / 2;
    this.shadowWidth = eyeWidth / 4 - 10; // 白目のグラデーションの幅
    this.irisWidth = eyeWidth / 2;
    this.eyeLidLayer = eyeLidLayer;
  }

  drawWhiteOfEye(x) {
    push();
    translate(x, this.eyesY);

    // 目の輪郭を描画
    fill(100);
    ellipse(0, 0, this.eyeWidth, this.eyeHeight);

    // 白目を描画
    for (let i = 0; i < this.shadowWidth; i++) {
      fill(255 - this.shadowWidth + i);
      ellipse(0, 0, this.eyeWidth - 5 - i, this.eyeHeight - 5 - i);
    }

    pop();
  }

  drawIris(x, y) {
    push();
    translate(x, y);

    for (let i = 0; i < this.irisWidth / 2; i++) {
      const factor = i / (this.irisWidth / 2);

      fill(factor * 180, factor * 100, 0);
      circle(0, 0, this.irisWidth - i);
    }

    // 光を描画
    fill(255, 255, 255);
    circle(0, -this.irisWidth / 4, this.irisWidth / 4);
    fill(255, 255, 255, 50);
    circle(0, this.irisWidth / 3, this.irisWidth * 0.4);

    pop();
  }

  blink() {
    eyeLidLayer.push();
    eyeLidLayer.noStroke();
    eyeLidLayer.fill(255, 220, 180);
    eyeLidLayer.rect(0, 0, width, height / 2);
    eyeLidLayer.pop();
  }
}

// #minacoding 2026 June 25th, Mobile View
// Moving funny eye mask
// 動く面白アイマスク
