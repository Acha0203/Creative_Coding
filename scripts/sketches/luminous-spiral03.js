t = 0;

draw = () => {
  t++ || (createCanvas(windowWidth, windowHeight), colorMode(HSB), noStroke());
  blendMode(BLEND);
  background(0, 0.1);
  blendMode(ADD);

  for (let d = 0; d < 360; d += 18) {
    const size = sin(t / 30 - d) * (width / 60);
    for (let i = 1; i < 4; i++) {
      const radius = (((width / 4) * (t % (width / 4))) / 99) * i;
      const radian = d + t / 99 + HALF_PI * i;
      const x = cos(radian) * radius + width / 2;
      const y = sin(radian) * radius + height / 2;
      fill(t % 360, 50, 1);
      for (let l = 0; l < HALF_PI; l += 0.01) {
        ellipse(x, y, tan(l) * size, tan(HALF_PI - l) * size);
      }
    }
  }
};

// #dailycodingseed background()
