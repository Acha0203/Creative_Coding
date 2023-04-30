s = 100;
v = w = 0.1;
(a = -1.5), (b = 1.8), (c = -1.8), (d = -0.4);
setup = () => {
  createCanvas((W = 700), W);
  background('#つぶやきProcessing #p5js');
  translate(W / 2, W / 2);
  for (let i = 0; i < 100000; i++) {
    x = sin(a * w) + c * cos(a * v);
    y = sin(b * v) + d * cos(b * w);
    stroke(0, s, s);
    point(x * s, y * s);
    v = x;
    w = y;
  }
};
