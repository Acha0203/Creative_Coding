t = 0;
draw = (_) => {
  t++ || createCanvas((W = 720), W);
  colorMode(HSB);
  background((F = 1), 0.03);
  noStroke();
  for (d = 0; d < 270; d += 15)
    for (r = 0; r < TAU + !(F = -F); r += PI / 63)
      fill(d / 4 + 160, 99 - (T = (r * W + t / 2 + d) % 90), W) *
        circle(
          cos(r * F) * (D = T + d) + 360,
          sin(r * F) * D + 360,
          (sin((T / 90) * PI) * d) / 15
        );
};
