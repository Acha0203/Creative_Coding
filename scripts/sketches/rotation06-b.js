t = a = 0;
draw = (_) => {
  t++ || (createCanvas((w = 720), w), colorMode(HSB), noStroke());
  background(0, 0.1);
  translate((p = w / 2), p);

  for (d = 0; d < 360; d += 9) {
    scale(0.93);
    rotate(a);
    fill((t + d) % 360, 99, 99);
    circle(cos((r = d + t / w)) * p, sin(r) * p, sin(t / 30 - d * 9) ** 10 * d);
  }

  a += 0.005;
};
