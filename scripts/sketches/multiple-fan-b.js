t = x = X = Y = A = c = 0;
y = b = T = 30;
s = 60;
l = 150;
S = 180;
d = -1;
draw = () => {
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
    b -= S * c + s;
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
  A = -0.733 * PI + (PI / s) * (t % T);
  X = x + l * cos(A);
  Y = y + l * sin(A) * d;
  stroke(T, T, Y);
  line(x, y, X, Y);
};
// #つぶやきProcessing #p5js #minacoding
