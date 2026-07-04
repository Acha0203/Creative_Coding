t = a = 0;
n = 20;
s = 1.1;
draw = () => {
  t++ ||
    (createCanvas((W = 500), W), angleMode(DEGREES), colorMode(HSB), noFill());
  background(0, 0.1);
  translate(W / 2, W / 2);
  for (let i = 0; i < n; i++) {
    scale(s);
    rotate(a);
    stroke(i * 10, 90, 90);
    quad(38, 31, 0, 30, 69, 63, 30, 76);
  }
  a += 0.5;
};
// #つぶやきProcessing #p5js
