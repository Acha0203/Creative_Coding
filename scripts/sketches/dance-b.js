t = a = b = c = d = e = 0;
T = 300;
w = 250;
h = 100;
F = (m, n) => m + n * noise(t / h);
D = (i) => {
  bezier(
    (a = F(w, -200 * i)),
    (e = F(w, T)),
    (b = F(w, -h * i)),
    e,
    (c = F(0, W)),
    e,
    (d = F(w, 0)),
    d
  );
  circle(d, F(d, -h), 50);
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
