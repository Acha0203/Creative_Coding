t = 0;

draw = () => {
  t++ || (createCanvas(windowWidth, windowHeight), colorMode(HSB), noStroke());
  blendMode(BLEND);
  background(0, 0.1);
  blendMode(ADD);

  // translate(t % width, t % height);
  // rotate((t * TAU) / 240);

  const angleA = (t * TAU) / 240;
  const cosA = Math.cos(angleA);
  const sinA = Math.sin(angleA);
  applyMatrix(cosA, sinA, -sinA, cosA, t % width, t % height);

  for (let r = 0; r < TAU * 3; r += PI / 10) {
    const angleB = r * t * 0.03;
    const p = (r * r * height) / 100;
    let x = Math.cos(angleB) * p + width / 2;
    let y = Math.sin(angleB) * p + height / 2;
    fill(color(t % 360, 50, 1));
    for (let l = 0; l < 90; l++) {
      ellipse(x, y, tan(l) * 10, tan(90 - l) * 10);
    }
  }
};

// #dailycodingseed ellipse()
