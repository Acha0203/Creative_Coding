t = 0;
s = 20;
draw = () => {
  t++ ||
    (createCanvas((w = 720), w), colorMode(HSL), noStroke(), (B = bezierPoint));
  background(0, 0.1);

  for (i = 0; i < 10; i++) {
    for (j = 1; j <= s; j++) {
      fill((t % 260) + j * 5, 90, 60);
      p = j / s;
      F = (n) => w * noise(t / 90, n + i);
      circle(B(F(0), F(2), F(4), F(6), p), B(F(8), F(6), F(4), F(2), p), j);
    }
  }
};

// #つぶやきProcessing #p5js
// #dailycodingseed bezierPoint()
