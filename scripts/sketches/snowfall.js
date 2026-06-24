let snowCrystalImage;
let snowflakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

  const imageSize = height / 4;
  const branchSize = imageSize / 3; // 雪の結晶の最も大きい枝の長さ
  const baseWeight = branchSize / 20;

  snowCrystalImage = createGraphics(imageSize, imageSize);
  snowCrystalImage.colorMode(HSB);
  snowCrystalImage.noFill();

  for (let i = 0; i < 6; i++) {
    drawSnowCrystal(imageSize / 2, imageSize / 2, branchSize, baseWeight, i);
  }

  const snowflakeSize = height / 8;

  for (let i = 0; i < height / 12; i++) {
    snowflakes.push(new Snowflake(snowflakeSize));
  }
}

function draw() {
  drawGradation(50, 100);

  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].fall();
  }
}

function drawGradation(from, to) {
  noStroke();

  for (let y = 0; y < height; y++) {
    fill(0, 0, lerp(from, to, y / height));
    rect(0, y, width, 1);
  }
}

function drawSnowCrystal(x, y, baseLength, branchWeight, rotateNumber) {
  // base case
  if (baseLength < 1) {
    return;
  }

  const nextLength = baseLength / 2.5;
  const nextWeight = Math.max(branchWeight - 1, 1);

  snowCrystalImage.push();
  snowCrystalImage.translate(x, y);
  snowCrystalImage.rotate((PI / 3) * rotateNumber);
  snowCrystalImage.strokeWeight(branchWeight);
  snowCrystalImage.stroke(0, 0, 100);

  snowCrystalImage.drawingContext.shadowColor = 'white';
  snowCrystalImage.drawingContext.shadowBlur = 20;

  snowCrystalImage.line(0, 0, 0, -baseLength);

  snowCrystalImage.drawingContext.shadowBlur = 0;

  snowCrystalImage.push();
  snowCrystalImage.translate(0, -nextLength * 1.2);

  for (let i = -1; i <= 1; i += 2) {
    snowCrystalImage.push();
    snowCrystalImage.rotate((PI / 3) * i);

    drawSnowCrystal(0, 0, nextLength, nextWeight, 0);

    snowCrystalImage.pop();
  }

  snowCrystalImage.pop();

  drawSnowCrystal(0, 0, nextLength, nextWeight, 0);
  drawSnowCrystal(0, -nextLength * 1.5, nextLength, nextWeight, 0);

  snowCrystalImage.pop();
}

class Snowflake {
  constructor(maxSize) {
    this.baseX = random(width);
    this.x = this.baseX;
    this.y = random(height);
    this.speed = random(2, 5);
    this.maxSnowflakeSize = maxSize;
    this.proportion = random(0.2, 1);
    this.size = this.proportion * maxSize;
    this.time = random(900);
    this.amplitude = random(20, 100);
    this.angle = 0;
  }

  fall() {
    this.y = this.y + this.speed;
    this.x = this.baseX + this.amplitude * sin(this.time);
    this.time += 0.01;
    this.angle += 0.1;

    if (this.y > height + this.maxSnowflakeSize) {
      this.baseX = random(width);
      this.y = -this.maxSnowflakeSize;
      this.speed = random(2, 5);
      this.proportion = random(0.2, 1);
      this.size = this.proportion * this.maxSnowflakeSize;
      this.time = random(900);
      this.amplitude = random(20, 100);
      this.angle = 0;
    }

    const imageSize = snowCrystalImage.width;
    push();
    translate(this.x, this.y);
    rotate(((this.time * PI) / 3600) * this.angle);
    scale(this.proportion, this.proportion);
    tint(0, 0, 100, this.proportion);
    image(snowCrystalImage, -imageSize / 2, -imageSize / 2);
    pop();
  }
}

// #minacoding 2026 June 23rd, Chill
// I was born in winter, so watching a snowfall in a chill morning makes me feel calm.
// 冬生まれなので、寒い朝に降る雪を見ていると穏やかな気持ちになります。
