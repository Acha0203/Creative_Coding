t = A = X = Y = 0;
W = 500;
P = [];
draw = () => {
  t++ ||
    (createCanvas(W, W), blendMode(ADD), stroke(255, 0, 0, 10), (R = random));
  if (t == 1) {
    for (let i = 0; i < 1e4; i++) {
      P[i] = { x: R(W), y: R(W) };
    }
  }
  for (let i = 0; i < P.length; i++) {
    point(P[i].x, P[i].y);
    A = 0.5 - noise((P[i].x / W) * 5, (P[i].y / W) * 5, 5);
    X = sin(A);
    Y = cos(A);
    P[i].x += X;
    P[i].y += Y;
  }
};
// #つぶやきProcessing #p5js #minacoding
