t = 0;
h = 1.57;
T = 360;
P = 180;

draw = () => {
  t++ || (createCanvas((w = 720), w), noStroke(), (B = blendMode));
  B(BLEND);
  background(0, 10);
  B(ADD);

  for (d = 0; d < T; d += 18)
    for (i = 1; i < 4; i++) {
      fill(1);
      for (l = 0; l < h; l += 0.01)
        ellipse(
          cos((r = d + t / 99 + h * i)) * (R = (P * (t % T)) / 99) * i + T,
          sin(r) * R * i + T,
          tan(l) * (s = sin(t / 30 - d) * 20),
          tan(h - l) * s
        );
    }
};

// #つぶやきProcessing #p5js
// #dailycodingseed background()

keyPressed = () => {
  if (key === 's') {
    saveGif('luminous-spiral03-b', 10);
  }
};
