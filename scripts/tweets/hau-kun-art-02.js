t = 0;
draw = (_) => {
  t || createCanvas((W = 720), W);
  t += 0.01;
  colorMode(HSB);
  B = blendMode;
  B(BLEND);
  background(0, 0.3);
  B(ADD);
  for (y = W; y; y -= 16)
    for (x = ((y / 16) % 2) * -9; x < W; x += 18)
      fill(
        ((N = noise(x / 99, y / 99, t)) * W) % 360,
        70,
        W,
        (T = tan(noise(x / W, y / W, t / 9) * 20 + t))
      ) + circle(x + (cos((R = N * 9)) * 9) / T, y + (sin(R) * 9) / T, 5 / T);
};
