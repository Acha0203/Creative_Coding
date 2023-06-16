t = 0;
n = 10;
draw = (_) => {
  t++ ||
    (createCanvas((W = 500), W), colorMode(HSB), noStroke(), (B = blendMode));
  B(BLEND);
  background(0, 0.1);
  B(ADD);
  for (r = 0; r < TAU * n; r += 0.005) {
    fill(100 + (t % 70), 50, r);
    circle(
      cos((a = r * t * 0.1)) * (b = r * r * n) + W / 2,
      tan(a) * b + W,
      n * r
    );
  }
};

// #つぶやきProcessing #p5js #minacoding Day 16: 緑
// #dailycodingseed frameCount
