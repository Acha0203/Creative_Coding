t = 0;
draw = (_) => {
  t++ || createCanvas((W = 720), W);
  background((F = 1), 9);
  noStroke();
  for (r = 0; r < TAU + !(F = -F); r += 0.1)
    for (d = 0; d < 360; d += 9)
      fill(0, noise(d, sin(r)) * 450, 99) +
        circle(
          cos((R = r + (t / W) * F)) *
            (D = ((t + d * 99 + sin(r * 9) * 9) % 540) + 9) +
            360,
          sin(R) * D + 360,
          (sin(r + t / 30 - d * 9) ** 20 * d) / 30
        );
};

// https://twitter.com/Hau_kun/status/1669695147238629376?s=20
