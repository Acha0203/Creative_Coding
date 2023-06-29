const txt = 'minacoding2023';

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  const tSize = width / 10;
  const radius = width / 3;

  background(0, 0.1);
  fill(255);
  textSize(tSize);

  for (let i = 0; i < txt.length; i++) {
    const step = TAU / txt.length;
    const x = cos(step * i) * radius + width / 2;
    const y = sin(step * i) * radius + height / 2;
    push();
    translate(x, y);
    rotate(step * i + HALF_PI + tan(frameCount / 99));
    fill((frameCount + i * 26) % 360, 100, 100);
    text(txt[i], 0, 0);
    pop();
  }
}

// #minacoding Day 30: フリーテーマ
// #p5js #dailycodingseed: text()
