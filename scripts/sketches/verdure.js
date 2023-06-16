t = x = y = 0;
n = 10;

draw = (_) => {
  t++ || (createCanvas(windowWidth, windowHeight), colorMode(HSB), noStroke());
  blendMode(BLEND);
  background(0, 0.1);
  blendMode(ADD);

  for (let r = 0; r < TAU * n; r += 0.005) {
    x = cos(r * t * 0.1) * r * r * n + width / 2;
    y = tan(r * t * 0.1) * r * r * n + height;
    fill(100 + (t % 70), 100, r);
    circle(x, y, n * r);
  }
};

// #つぶやきProcessing #p5js #minacoding Day 16: 緑
// #dailycodingseed frameCount()
