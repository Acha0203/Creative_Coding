t = 0;
d = 1;
s = 140;
g = 220;

draw = (_) => {
  t++ || (createCanvas((w = 720), w), noFill(), (S = sin), (C = cos));
  background(0, 10);
  strokeWeight(12);
  strokeCap(PROJECT);

  for (x = 0; x <= w + g; x += g)
    for (y = 0; y <= w + g; y += g) {
      stroke(
        60,
        (e = y + s * -S((a = -PI + (PI / 60) * (t % 60)))) % 80,
        e % g
      );

      t % 60 != 0
        ? line((f = x + s * -C(a) * d), e, x + s * C(a) * d, y + s * S(a))
        : (d = -d);
    }
};

// #つぶやきProcessing #p5js
// #dailycodingseed strokeCap()
