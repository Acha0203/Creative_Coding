t = 0;
draw = (_) => {
  t++ || (createCanvas((W = 720), W), (B = blendMode));
  B(BLEND);
  background((F = 1), 9);
  B(ADD);
  noStroke();
  for (r = 0; r < TAU + !(F = -F); r += 0.1)
    for (d = 0; d < 360; d += 9)
      fill(0, 99, noise(d, sin(r)) * 100, d / 30) +
        circle(
          cos((R = r + (t / W) * F)) * (D = (t + d * 99 + sin(r * 9)) % 540) +
            360,
          sin(R) * D + 360,
          (sin(r + t / 30 - d * 9) ** 2 * d) / 9
        );
};

// #minacoding Day 28: 誰かの作品を真似してみてください。一部を自分なりに変えてみましょう。
// https://twitter.com/Hau_kun/status/1669695147238629376?s=20
