t = 0;
y = 150;
setup = () => {
  createCanvas((W = 500), W);
  background('#つぶやきProcessing');
  T = translate;
  L = line;
  t = radians(30);
  T(W / 2, W);
  stroke(50, y, 50);
  strokeWeight(3);
  L(0, 0, 0, -y);
  T(0, -y);
  B(y);
};
B = (h) => {
  h *= 0.66;
  if (h > 1) {
    D(h, t);
    D(h, -t);
  }
};
D = (h, t) => {
  push();
  rotate(t);
  L(0, 0, 0, -h);
  T(0, -h);
  B(h);
  pop();
};
// #p5js #minacoding
