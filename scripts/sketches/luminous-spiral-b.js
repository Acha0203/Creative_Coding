t = 0;
d = 1;
C = 360;
draw = () => {
  t++ ||
    (createCanvas((W = 720), W), colorMode(HSB), noStroke(), (B = blendMode));
  B(BLEND);
  background(0, 0.05);
  B(ADD);
  for (r = 0; r < TAU; r += PI / C) {
    fill((c = color(t % C, 70 + r, r * r)));
    circle(
      cos((a = r * t * 0.03) * d) * (p = r * r * 7.2) + C,
      sin(a * d) * p + C,
      blue(c) / 4
    );
  }
  d = -d;
};

// #つぶやきProcessing #p5js #dailycodingseed blue()
// #minacoding Day 17: エディターを使わずに、コードを紙に書いてみてください。
