function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  noStroke();
}

function draw() {
  background(0, 0.1);

  for (let i = 0; i < 10; i++) {
    const fn = (m, n) => {
      return m * noise(frameCount / 100, n + i);
    };

    const x1 = fn(width, 0);
    const x2 = fn(width, 10);
    const x3 = fn(width, 20);
    const x4 = fn(width, 30);
    const y1 = fn(height, 40);
    const y2 = fn(height, 50);
    const y3 = fn(height, 60);
    const y4 = fn(height, 70);

    const steps = 20;

    for (let j = 1; j <= steps; j++) {
      fill(
        map(frameCount % 360, 0, 360, -150, 210) + (j + i) * 5,
        90,
        60,
        0.05 * j
      );
      const p = j / steps;
      const x = bezierPoint(x1, x2, x3, x4, p);
      const y = bezierPoint(y1, y2, y3, y4, p);
      circle(x, y, j);
    }
  }
}

// #dailycodingseed bezierPoint()
