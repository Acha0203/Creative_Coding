t = x = X = Y = A = c = 0;
y = b = T = 30;
s = 150;
S = 180;
d = -1;
draw = (_) => {
  t++ || createCanvas((W = 637), W);
  background(0, 0.5);
  if (X > W && x > W) {
    b += S;
    x = 0;
    y = b;
    d = -1;
    c++;
  }
  if (Y > W && y > W) {
    b -= S * c + 60;
    x = 0;
    y = b;
    d = -1;
    c = 0;
  }
  if (t % T == 0) {
    x = X;
    y = Y;
    d = -d;
  }
  A = -0.733 * PI + (PI / 60) * (t % T);
  X = x + s * cos(A);
  Y = y + s * sin(A) * d;
  stroke(y, s, s);
  line(x, y, X, Y);
};
