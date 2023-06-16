t = 0;
n = 10;

draw = (_) => {
  t++ || (createCanvas(windowWidth, windowHeight), colorMode(HSB), noStroke());
  blendMode(BLEND);
  background(120, 100, 10, 0.1);
  blendMode(ADD);

  for (let r = 0; r < TAU * n; r += 0.005) {
    let angle = r * t * 0.1;
    let p = r * r * n;
    let x = cos(angle) * p + width / 2;
    let y = tan(angle) * p + height;
    fill(100 + (t % 70), 50, r);
    // ellipse(x, y, tan(r) * n, tan(90 - r) * n);
    circle(x, y, r * n);
  }
};

// #minacoding Day 16: 緑
// #dailycodingseed frameCount
