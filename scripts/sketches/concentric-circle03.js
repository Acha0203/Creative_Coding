t = a = 0;
P = [];
draw = (_) => {
  t++ || createCanvas((W = 720), W);
  background(0, 20);
  noFill();
  R = random;
  X = R(W);
  Y = R(W);
  m = R(W / 2);
  for (i = (t % 9) * W; i < R(W); i++) {
    P[a++ % (W * 5)] = { x: X, y: Y, t: -i, c: i, i: R(9), m: m };
  }
  P.forEach(
    (e) =>
      stroke(W, e.t++ > 0 ? sin(e.c / e.i) * e.m - e.t : 0) +
      circle(e.x, e.y, e.t)
  );
};
