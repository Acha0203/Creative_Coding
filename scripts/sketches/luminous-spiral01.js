t = 0;
d = 1;

draw = () => {
  t++ || (createCanvas(windowWidth, windowHeight), colorMode(HSB), noStroke());
  blendMode(BLEND);
  background(0, 0.05);
  blendMode(ADD);

  for (let r = 0; r < TAU; r += PI / 360) {
    const angle = r * t * 0.03;
    const p = (r * r * height) / 100;
    const x = cos(angle * d) * p + width / 2;
    const y = sin(angle * d) * p + height / 2;
    const c = color(t % 360, 70 + r, r * r);
    const b = blue(c);
    fill(c);
    circle(x, y, b / 4);
  }

  d = -d;
};

// #dailycodingseed blue()
