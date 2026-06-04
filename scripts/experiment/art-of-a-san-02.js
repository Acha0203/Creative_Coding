a = (x, y, d = mag((k = 4 * cos(x / 21)), (e = y / 8 - 20))) =>
  circle(
    (q = 3 * sin(k * 2) + 0.3 / k + sin(y / 19) * k * (9 + 2 * sin(e * 14 - d * 3 + t * 2))) +
      50 * cos((c = d - t)) +
      200,
    q * sin(c) + d * 39 - 475,
    k * k > 15 ? 2 : 1,
  );
(t = 0),
  (draw = ($) => {
    t || createCanvas((w = 400), w);
    background(9).noStroke().fill(w, 116);
    for (t += PI / 240, i = 1e4; i--; ) a(i, i / 235);
  });
