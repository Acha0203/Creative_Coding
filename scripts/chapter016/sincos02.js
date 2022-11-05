let s = 0.9;
let a = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  const r = 250;
  clear();
  translate(r, r);

  for (let i = 0; i < 360; i += 10) {
    scale(s);
    rotate(a);
    const x = cos(i) * r;
    const y = sin(i) * r;
    noFill();
    stroke(i, r, r);
    circle(x, y, i * 5);
  }

  a += 0.5;
}
