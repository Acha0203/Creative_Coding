t = 0;
A = [];

draw = () => {
  t++ || (createCanvas((w = 500), w), noFill(), (R = random));
  background(0, 20);
  x = R(w);
  y = R(w);
  n = R(10);
  d = 2;

  for (i = 0; i < n; i++) {
    s = R(1, 20);
    A[i] = { x: x, y: y, d: d, s: s };
    d += s * 2;
  }

  A.forEach((a) => {
    stroke(0, 90, R(90));
    strokeWeight(a.s);
    arc(a.x, a.y, a.d, a.d, R(TAU), R(TAU));
  });
};

// #つぶやきProcessing #p5js #p5勉強会
// #dailycodingseed arc()

keyPressed = () => {
  if (key === 's') {
    saveGif('concentric-circle04-b', 5);
  }
};
