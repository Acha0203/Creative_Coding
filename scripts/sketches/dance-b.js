t = a = b = c = d = e = 0;
T = 300;
w = 250;
F = (m, n) => {
  return m + n * noise(t / 100);
};
D = (i) => {
  a = F(w, -200 * i);
  b = F(w, -100 * i);
  c = F(0, W);
  d = F(w, 0);
  e = F(w, T);
  bezier(a, e, b, e, c, e, d, d);
  circle(d, F(d, -100), 50);
};
draw = () => {
  t++ || (createCanvas((W = 500), W), noFill());
  background(0, 10);
  stroke(T);
  D(1);
  D(-1);
};
// #つぶやきProcessing #p5js #minacoding Day 12

keyPressed = () => {
  if (key === 's') {
    saveGif('dance-b', 10);
  }
};
