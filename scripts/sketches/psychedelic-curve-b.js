b = 100;
a = -b;
r = t = 0;
g = 200;
S = (n, i) => {
  stroke((t % 360) + i * 5 * n, 90, i * 5);
};
draw = () => {
  t++ || (createCanvas((W = 720), W), colorMode(HSB), noFill(), (C = curve));
  background(0, 0.1);
  translate(W / 2, W / 2);
  for (i = 0; i < 20; i++) {
    rotate(r);
    S(0, i);
    C(a, b, 0, a, b, b, g, a);
    S(1, i);
    C(0, a, b, b, g, a, g + b, b);
  }
  r += 0.002;
};
//#つぶやきProcessing #p5js #dailycodingseed

keyPressed = () => {
  if (key === 's') {
    saveGif('psychedelic-curve-b', 15);
  }
};
