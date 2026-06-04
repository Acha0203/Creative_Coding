a = (m, d = mag((k = 9 * cos(i / 81)), (e = i / 765 - 13)) / 4) =>
  point(
    (q =
      79 -
      2 * sin(k * 3) +
      (sin(k * k < 19 ? t * 3 + d * 4 : d / 2 + 4) / 2) *
        k *
        (9 + 5 * sin(d * d - e / 6 - t + m))) *
      sin((c = (d * d) / 9 - t / 16 + m)) +
      200,
    (q + 50) * cos(c) + 200,
  );
(t = 0),
  (draw = ($) => {
    t || createCanvas((w = 400), w);
    background(9).stroke(w, 96);
    for (t += PI / 45, i = 2e4; i--; ) a((i % 2) * 9);
  }); //
