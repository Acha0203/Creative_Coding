const radius = 150;
let n = 9;
let d = 4;
let x = 0;
let y = 0;
let bx = 0;
let by = 0;
let range = 0;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // stroke(255);
  strokeWeight(1);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB, 100);
}

function draw() {
  translate(width / 2, height / 2);
  stroke(0, 0, millis() % 100);

  // ここがバラ曲線の数式
  // radius をかけてあげないとかなり小さな絵になってしまう
  range = radius * sin(angle * (n / d));
  bx = x;
  by = y;
  x = range * cos(angle);
  y = range * sin(angle);
  line(bx, by, x, y);
  angle += 28;
}
