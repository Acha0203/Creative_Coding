// #つぶやきProcessing #p5js #dailycodingseed
t = 0;
a = b = c = d = e = f = g = h = 0;
H = 100;
draw = () => {
  t++ ||
    (createCanvas((W = 600), W),
    colorMode(HSB),
    (C = color),
    (N = noise),
    noFill());
  background(0, 0.05);
  for (let i = 0; i < 10; i++) {
    stroke(lerpColor(C(1, H, H), C(W / 2, H, 10), N(t / H, i)));
    a = F(0, i);
    b = F(1, i);
    c = F(2, i);
    d = F(3, i);
    e = F(4, i);
    f = F(5, i);
    g = F(6, i);
    h = F(7, i);
    bezier(a, e, b, f, c, g, d, h);
  }
};
F = (p, i) => {
  return W * N(t / H, p + i);
};
