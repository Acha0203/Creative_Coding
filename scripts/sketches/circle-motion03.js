let s = 0.9;
let a = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  const r = 250;
  background(0, 30);
  translate(r, r);

  for (let i = 0; i < 360; i += 10) {
    scale(s);
    rotate(a);
    const x = cos(i) * r;
    const y = sin(i) * r;
    noStroke();
    fill(i);
    circle(x, y, i * 5);
  }

  a += 0.5;
}
// #つぶやきProcessing #p5js #minacoding
