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
    stroke(lerpColor(C(1, H, H), C(W / 2, H, 10), N(t / H, 0 + i)));
    a = W * N(t / H, 0 + i);
    b = W * N(t / H, 1 + i);
    c = W * N(t / H, 2 + i);
    d = W * N(t / H, 3 + i);
    e = W * N(t / H, 4 + i);
    f = W * N(t / H, 5 + i);
    g = W * N(t / H, 6 + i);
    h = W * N(t / H, 7 + i);
    bezier(a, e, b, f, c, g, d, h);
  }
};
