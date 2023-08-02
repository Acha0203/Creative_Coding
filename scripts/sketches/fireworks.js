n = 9;
fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
  initFireworks();
}

function draw() {
  background(0, 0.05);

  for (let i = 0; i < n; i++) {
    for (let r = 0; r < TAU; r += PI / n) {
      let length = random(frameCount % fireworks[i].size);
      x = cos(r) * length + fireworks[i].x;
      y = sin(r) * length + fireworks[i].y;
      fill((frameCount + length) % 360, 80, 90);
      circle(x, y, length / 20);
    }
  }

  if (frameCount % 90 <= 0) initFireworks();
}

function initFireworks() {
  fireworks = [];

  for (let i = 0; i < n; i++) {
    fireworks.push({
      x: random(width),
      y: random(height),
      size: random(90, 500),
    });
  }
}

// #dailycodingseed random()
