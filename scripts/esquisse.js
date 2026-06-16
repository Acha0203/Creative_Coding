const leaves = [];
const flowers = [];
const stars = [];
const texts = ['木稠葉落更回春', '長緑生花旧約新', '森也深恩若忘却', '無量億劫畜生身'];
const textsAnimDuration = 30;
const textsHoldDuration = 60;
const textsFadeOutDuration = 60;
const textsGapDuration = 0;
const intermissionFadeDuration = textsFadeOutDuration * 2;
const textsFinalFadeInDuration = 480;
const oneTextDuration = textsAnimDuration * texts[0].length + textsHoldDuration;
let textsLayer, intermissionLayer;

async function preload() {
  minchoFont = await loadFont('/assets/font/HinaMincho-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  intermissionLayer = createGraphics(width, height);
  textsLayer = createGraphics(width, height);

  for (let i = 0; i < 100; i++) {
    leaves.push(new Leaf());
  }

  const numberOfFlowers = 10;
  const maxSize = width / numberOfFlowers;

  for (let i = 0; i < numberOfFlowers; i++) {
    flowers.push(new Flower(maxSize));
  }

  const numberOfStars = Math.floor(width * height * (6 / 1e5));

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  const leavesFadeOutEnd = oneTextDuration + intermissionFadeDuration;
  const flowersFadeInStart = leavesFadeOutEnd;
  const flowersFadeInEnd = flowersFadeInStart + oneTextDuration;
  const flowersFadeOutStart = flowersFadeInEnd;
  const flowersFadeOutEnd = flowersFadeOutStart + intermissionFadeDuration;
  const blackoutFadeInStart = flowersFadeOutEnd;
  const blackoutFadeInEnd = blackoutFadeInStart + oneTextDuration;
  const starsFadeInStart = blackoutFadeInEnd;
  const starsFadeInEnd = starsFadeInStart + intermissionFadeDuration;

  background(0);
  noStroke();

  if (frameCount > oneTextDuration && frameCount <= flowersFadeInEnd) {
    intermission(oneTextDuration, false);
  }

  if (frameCount > flowersFadeOutStart && frameCount <= flowersFadeOutEnd) {
    blendMode(BLEND);
    background(0);
    intermission(flowersFadeOutStart, true);
  }

  if (frameCount > starsFadeInStart && frameCount <= starsFadeInEnd) {
    intermission(starsFadeInStart, true);
  }

  if (frameCount <= leavesFadeOutEnd) {
    const factor = max(0, 1 - max(0, frameCount - oneTextDuration) / intermissionFadeDuration);

    for (let i = 0; i < leaves.length; i++) {
      leaves[i].fall(factor);
    }
  }

  if (frameCount > flowersFadeInStart && frameCount <= flowersFadeOutEnd) {
    let factor = 1;

    if (frameCount <= flowersFadeInEnd) {
      factor = min(1, (frameCount - flowersFadeInStart) / intermissionFadeDuration);
    }

    if (frameCount > flowersFadeOutStart) {
      factor = max(0, 1 - max(0, frameCount - flowersFadeOutStart) / intermissionFadeDuration);
    }

    blendMode(BLEND);
    background(0, 0.05);
    blendMode(ADD);
    noFill();

    for (let i = 0; i < flowers.length; i++) {
      flowers[i].bloom(factor);
    }
  }

  if (frameCount > starsFadeInStart) {
    const factor = min(1, (frameCount - starsFadeInEnd) / intermissionFadeDuration);

    blendMode(BLEND);
    background(0);
    blendMode(ADD);
    noStroke();

    for (let i = 0; i < stars.length; i++) {
      stars[i].twinkle(factor);
    }
  }

  displayAllTexts(texts, height / 15);
}

class Leaf {
  constructor() {
    this.baseX = random(width);
    this.x = this.baseX;
    this.y = random(height);
    this.speed = random(2, 5);
    this.leafSize = random(5, 10);
    this.time = random(900);
    this.amplitude = random(20, 100);
    this.angle = 0;
    this.hue = random(0, 40);
  }

  fall(brightnessFactor = 1) {
    this.y = this.y + this.speed;
    this.x = this.baseX + this.amplitude * sin(this.time);
    this.time += 0.01;
    this.angle += 0.1;

    if (this.y > height) {
      this.baseX = random(width);
      this.y = 0;
      this.speed = random(2, 5);
      this.time = random(900);
      this.amplitude = random(20, 100);
      this.angle = 0;
      this.hue = random(0, 40);
    }

    push();
    fill(this.hue, 100, 50 * brightnessFactor);
    translate(this.x, this.y);
    rotate(((this.time * PI) / 3600) * this.angle);
    ellipse(0, 0, this.leafSize, this.leafSize * 2);
    pop();
  }
}

class Flower {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.x = random(width);
    this.y = random(height);
    this.size = random(maxSize / 2, maxSize);
    this.petals = random(4, 6);
  }

  bloom(brightnessFactor = 1) {
    const t = frameCount / 5;
    const period = 90;
    const oscillation = 1 - abs((t % (2 * period)) / period - 1);

    let direction = 3;

    push();
    translate(this.x, this.y);

    for (let r = 0; r < TAU; r += PI / this.petals) {
      let angle = r + (sin(t / 50) / 3) * direction;
      let x = cos(angle) * this.size;
      let y = sin(angle) * this.size;
      stroke(this.size + ((t + this.size) % 300), 30, 30 * brightnessFactor * oscillation, 0.5);
      circle(x, y, this.size + (t % period));
      direction = -direction;
    }

    pop();

    if (t % period === 0) {
      this.x = random(width);
      this.y = random(height);
      this.size = random(this.maxSize / 2, this.maxSize);
      this.petals = random(4, 6);
    }
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(5, 10);
    this.duration = random(30, 60);
  }

  twinkle(brightnessFactor = 1) {
    const progress = 1 - abs((frameCount % (2 * this.duration)) / this.duration - 1);

    push();
    fill(this.duration * 2 + (frameCount % 300), 50, 10 * progress * brightnessFactor);
    translate(this.x, this.y);

    for (let l = 0; l < HALF_PI; l += 0.1) {
      ellipse(0, 0, tan(l) * this.size, tan(HALF_PI - l) * this.size);
    }

    pop();
  }
}

function displayAllTexts(textsArray, size) {
  const phaseDuration =
    textsArray[0].length * textsAnimDuration + textsHoldDuration + intermissionFadeDuration;
  const phase2StartFrame = textsArray.length * phaseDuration;
  const finalXOffsets = [size * 3, size, -size, -size * 3];
  const maxBrightness = 10 * textsArray[0].length;

  textsLayer.clear();
  textsLayer.colorMode(HSB);
  textsLayer.noStroke();
  textsLayer.textFont(minchoFont);
  textsLayer.textSize(size);

  // Phase 1: 1文字列ずつ順番にフェードイン→フェードアウト
  for (let j = 0; j < textsArray.length; j++) {
    const txt = textsArray[j];
    const startFrame = j * phaseDuration;
    const fadeOutStart = startFrame + txt.length * textsAnimDuration + textsHoldDuration;
    const textsFadeInDuration = txt.length * textsAnimDuration;

    if (frameCount < startFrame || frameCount >= startFrame + phaseDuration) continue;

    textsLayer.push();
    textsLayer.translate((width - size) / 2, (height - size * 1.2 * txt.length + size * 1.2) / 2);

    for (let i = 0; i < txt.length; i++) {
      const charProgress = min(
        max((frameCount - startFrame - i * textsAnimDuration) / textsFadeInDuration, 0),
        1,
      );
      const fadeOutDuration = j === 0 ? textsFadeOutDuration : intermissionFadeDuration;
      const fadeOutProgress = min(max((frameCount - fadeOutStart) / fadeOutDuration, 0), 1);

      textsLayer.fill(0, 0, maxBrightness * charProgress * (1 - fadeOutProgress));
      textsLayer.text(txt[i], 0, size * 1.2 * i);
    }

    textsLayer.pop();
  }

  // Phase 2: 全文字列が finalXOffsets の位置で同時フェードイン
  if (frameCount >= phase2StartFrame) {
    const phase2Progress = min((frameCount - phase2StartFrame) / textsFinalFadeInDuration, 1);

    for (let j = 0; j < textsArray.length; j++) {
      const txt = textsArray[j];

      textsLayer.push();
      textsLayer.translate(
        (width - size) / 2 + finalXOffsets[j],
        (height - size * 1.2 * txt.length + size * 1.2) / 2,
      );
      textsLayer.fill(0, 0, maxBrightness * phase2Progress);

      for (let i = 0; i < txt.length; i++) {
        textsLayer.text(txt[i], 0, size * 1.2 * i);
      }

      textsLayer.pop();
    }
  }

  image(textsLayer, 0, 0);
}

function intermission(intermissionStart, isFadeIn) {
  const elapsed = frameCount - intermissionStart;

  let factor = (fadeOutFactor = max(0, 1 - max(0, elapsed) / intermissionFadeDuration));

  if (isFadeIn) {
    factor = max(0, min(1, 1 - abs(elapsed / intermissionFadeDuration - 1)));
  }

  intermissionLayer.clear();
  intermissionLayer.colorMode(HSB);
  intermissionLayer.noStroke();
  intermissionLayer.fill(0, 0, 0, 100 * factor);
  intermissionLayer.rect(0, 0, width, height);

  image(intermissionLayer, 0, 0);
}

// #minacoding 2026 June 14th, Story
// 謝森公深恩之願書
