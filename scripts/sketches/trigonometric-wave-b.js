t = x = y = a = s = A = 0;
h = 100;
draw = () => {
  t++ || (createCanvas((W = 500), W), noStroke(), (R = random));
  if (t % 5 == 0) {
    background(0, 50, 150);
    for (i = 0; i < 10; i++) {
      x = 0;
      y = i * 50;
      fill(80, R(h, 150), 255, 5);
      s = 30 + i * 5;
      while (x < W) {
        circle(x, y, s);
        a = R(5, 10);
        A = t * R(0.01, 0.1) + R(PI);
        x += a * abs(sin(A));
        y += a * cos(A);
        t++;
      }
    }
  }
};
// #つぶやきProcessing #p5勉強会 #minacoding Day 9
