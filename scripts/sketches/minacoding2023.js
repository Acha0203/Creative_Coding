const txt1 = 'minacoding2023';
const txt2 = 'Thank you!';

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  noStroke();
}

function draw() {
  background(0, 0.05);

  display(txt1, width / 3, width / 10, 0);
  display(txt2, width / 5, width / 14, 180);
}

function display(txt, radius, tSize, startHue) {
  for (let i = 0; i < txt.length; i++) {
    const step = TAU / txt.length;
    const x = cos(step * i) * radius + width / 2;
    const y = sin(step * i) * radius + height / 2;
    push();
    textSize(tSize);
    translate(x, y);
    rotate(step * i + HALF_PI + tan(frameCount / 99));
    fill((startHue + frameCount + i * (360 / txt.length)) % 360, 100, 80);
    text(txt[i], 0, 0);
    pop();
  }
}

// #minacoding Day 30: フリーテーマ
// #p5js #dailycodingseed: text()
