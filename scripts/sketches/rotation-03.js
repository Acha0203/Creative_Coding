const n = 20;
let s = 1.1;
let a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  noFill();
  a = 0;
}

function draw() {
  background(0, 0.1);
  translate(width / 2, height / 2);

  for (let i = 0; i < n; i++) {
    scale(s);
    rotate(a);
    stroke(i * 10, i * 5, i * 5);
    quad(38, 31, 0, 30, 69, 63, 30, 76);
  }

  a += 0.5;
}
