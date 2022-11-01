const n = 20;
let s = 0.9;
let a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(HSB);
  strokeWeight(4);
  a = 0;
}

function draw() {
  clear();
  translate(width / 2, height / 2);

  // n個の矩形を描画する
  for (let i = 0; i < n; i++) {
    scale(s); // sが1未満なので呼び出すほど縮小していく
    rotate(a);
    stroke(i * 20, 100, 100);
    noFill();
    rect(0, 0, 200, 200);
  }

  a += 0.5;
}
