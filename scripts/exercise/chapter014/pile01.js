const space = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  stroke(240);
  noFill();

  let d = 0; // 円の直径

  translate(width / 2, height / 2);
  for (let i = 0; i < 30; i++) {
    circle(0, 0, d);
    d += space - i * 2;
  }
}