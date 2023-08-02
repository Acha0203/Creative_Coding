t = 0;
f = [];

draw = (_) => {
  t++ ||
    (createCanvas((w = 720), w),
    colorMode(HSB),
    (R = random),
    (I = (_) => {
      f = [];
      for (i = 0; i < 9; i++) {
        f.push({
          x: R(w),
          y: R(w),
          s: R((n = 90), 360),
        });
      }
    }),
    I());

  background(0, 0.1);

  for (i = 0; i < 9; i++)
    for (r = 0; r < TAU; r += PI / 9)
      fill((t + (l = R(t % f[i].s))) % 360, n, n) +
        circle(cos(r) * l + f[i].x, sin(r) * l + f[i].y, l / 20);
};

keyPressed = () => {
  if (key === 's') {
    saveGif('fireworks-b', 5);
  }
};

// #つぶやきProcessing #p5js
// #dailycodingseed random()
