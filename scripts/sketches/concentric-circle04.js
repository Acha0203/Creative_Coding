t = 0;
A = [];
draw = (_) => {
  t++ || createCanvas((W = 500), W);
  background(0, 10);
  noFill();
  R = random;
  X = R(W);
  Y = R(W);
  for (i = 0; i < R(W); i++) {
    A[i] = { x: X, y: Y, d: i + (t % 10) };
  }
  A.forEach((e) => {
    stroke(R(W));
    strokeWeight(R(1, 8));
    arc(e.x, e.y, e.d, e.d, R(TAU), R(TAU));
  });
};

// #つぶやきProcessing #p5勉強会
