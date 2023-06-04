s = 0.9;
a = t = 0;
draw = () => {
  t++ ||
    (createCanvas((W = 500), W), rectMode(CENTER), noFill(), (T = translate));
  background(0, 10);
  T(W / 2, W / 2);
  for (let i = 0; i < 25; i++) {
    scale(s);
    stroke(i * 10);
    R(0, 0);
    R(-W / 3, -W / 3);
    R(W / 3, -W / 3);
    R(W / 3, W / 3);
    R(-W / 3, W / 3);
  }
  a += PI / 72;
};
R = (x, y) => {
  push();
  T(x, y);
  rotate(a);
  rect(0, 0, W, W);
  pop();
};
// #つぶやきProcessing #p5js #dailycodingseed
