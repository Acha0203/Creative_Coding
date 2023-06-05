t = a = l = x = y = 0;
d = 1;
draw = () => {
  t++ || (createCanvas((W = 720), W), noStroke(), (B = blendMode), (F = fill));
  clear();
  if (keyIsPressed) {
    F(150);
    B(OVERLAY);
  } else {
    F(255);
    B(DIFFERENCE);
  }
  for (r = 0; r < TAU; r += PI / 8) {
    a = r + (sin(t / 50) / 3) * d;
    l = noise(t / 100) * 360;
    x = cos(a) * l + W / 2;
    y = sin(a) * l + W / 2;
    circle(x, y, t % 360);
    d = -d;
  }
};
// #つぶやきProcessing #p5js #dailycodingseed
