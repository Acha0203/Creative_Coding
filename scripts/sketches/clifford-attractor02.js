s = 100;
v = w = 0.1;
(a = -1.1), (b = 1.5), (c = -1.9), (d = -0.7);
setup = () => {
  createCanvas((W = 700), W);
  background(0);
  blendMode(ADD);
  translate(W / 2, W / 2);
  for (let i = 0; i < 1e5; i++) {
    x = sin(a * w) + c * cos(a * v);
    y = sin(b * v) + d * cos(b * w);
    stroke(0, s, s, s);
    point(x * s, y * s);
    v = x;
    w = y;
  }
}; // #つぶやきProcessing #p5js
