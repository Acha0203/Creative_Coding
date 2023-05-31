t = a = d = h = 0;
W = f = 500;
c = W / 3;
e = W - c;
D = 1;

draw = (_) => {
  t++ || createCanvas(W, W);
  noFill();
  stroke('#つぶやきProcessing');
  background(0, 10);

  if (d >= W || d <= 0) {
    D *= -1;
  }
  d += (t % 5) * D;
  f -= (t % 5) * D;

  bezier(a, W, c, d, e, f, W, h);

  circle(c, d, 20);
  circle(e, f, 20);
};
