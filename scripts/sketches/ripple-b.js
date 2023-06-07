t = x = y = 0;
m = 200;
h = 100;
w = 2;
f = false;
draw = () => {
  t++ || (createCanvas((W = 720), W), noFill(), I(), (E = ellipse));
  background(0, 10);
  stroke(t % h, 50 + (t % h), 255);
  if (!f) E(x, y - 300 + (t % h) * 3, 2, 2);
  if (t % h === 0) f = true;
  if (f) {
    w = w > m ? 0 : w + (t % m);
    E(x, y, w, w / 2);
  }
  if (t % (h + m) === 0) {
    f = false;
    I();
  }
};
I = () => {
  R = random;
  x = R(0, W);
  y = R(0, W);
};
// #つぶやきProcessing #p5js #minacoding Day 9