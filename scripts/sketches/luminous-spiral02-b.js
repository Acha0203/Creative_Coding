t = 0;
draw = () => {
  t++ ||
    (createCanvas((w = 720), w), colorMode(HSB), noStroke(), (B = blendMode));
  B(BLEND);
  background(0, 0.1);
  B(ADD);
  rotate((t * TAU) / 240);
  for (r = 0; r < TAU * 3; r += PI / 10) {
    fill(color(t % 360, 50, 1));
    for (l = 0; l < 90; l++) {
      ellipse(
        cos((a = r * t * 0.03)) * (p = (r * r * w) / 100) + w / 2,
        sin(a) * p + w / 2,
        tan(l) * 10,
        tan(90 - l) * 10
      );
    }
  }
};

// #つぶやきProcessing #p5js
// #dailycodingseed ellipse()
