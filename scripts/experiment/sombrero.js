t = a = b = 0;
g = 240;

draw = () => {
  t++ || (createCanvas((w = 720), w), (S = sin), (C = cos));
  clear();
  stroke(w);
  for (z = g; z > -g; z -= 2) {
    for (x = -g; x < g; x += 2) {
      q = sqrt(x * x + z * z) / 60;
      y = (50 * S(q * PI)) / q;
      c = y * C(a) - z * S(a);
      d = x * C(b) - (y * S(a) + z * C(a)) * S(b);
      point(w / 2 + d * C(0) - c * S(0), w / 2 + d * S(0) + c * C(0));
    }
  }

  a += 0.1;
  b += 0.01;
};

R = (x, y, z) => {
  c = y * C(a) - z * S(a);
  d = x * C(b) - (y * S(a) + z * C(a)) * S(b);
  e = d * C(0) - c * S(0);
  f = d * S(0) + c * C(0);
};

// #p5js #minacoding Day 27: 3D
