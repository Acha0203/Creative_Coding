t = 0;
arcs = [];

draw = () => {
  t++ || (createCanvas((w = 500), w), noFill(), (R = random));
  background(0, 20);
  x = R(w);
  y = R(w);
  n = R(10);
  d = 2;

  for (i = 0; i < n; i++) {
    s = R(1, 20);
    arcs[i] = { x: x, y: y, d: d, s: s };
    d += s * 2;
  }

  arcs.forEach((a) => {
    stroke(0, 90, R(90));
    strokeWeight(a.s);
    arc(a.x, a.y, a.d, a.d, R(TAU), R(TAU));
  });
};

// #つぶやきProcessing #p5js #p5勉強会
// #minacoding Day 26: random
// #dailycodingseed arc()
