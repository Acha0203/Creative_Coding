t = 0;

draw = () => {
  t++ ||
    (createCanvas(windowWidth, windowHeight),
    noFill(),
    rectMode(CENTER),
    colorMode(HSB));

  blendMode(BLEND);
  background(0, 0.05);
  blendMode(ADD);

  x = random(width);
  y = random(height);
  d = random(10, height / 3);
  n = random(10, d / 10);

  for (w = 10; w > 0; w--) {
    for (i = 1; i <= n; i++) {
      translate(x, y);
      strokeWeight(w);
      stroke((t % 270) + i * 3, 50, 1);
      rotate((TAU / n) * i);
      square(0, 0, d);
      resetMatrix();
    }
  }
};

// #minacoding Day 26: randomを使って作品を作ってください。
// #dailycodingseed rectMode()
