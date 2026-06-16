let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  let w = width / 2;
  let h = height / 2;
  let particleSize = Math.max(width, height) / 30;

  t += 0.01;
  blendMode(BLEND);
  background(0, 0.1);
  blendMode(ADD);

  translate(width * 0.01 * sin(PI * t), height * 0.01 * sin(PI * t));
  rotate(t);

  for (let r = 0; r < particleSize * 2; r += 0.1) {
    fill((frameCount % 200) + r * 2, r * 2, r * 2, 0.2);
    ellipse(
      tan(r * 2 + t) * w + w,
      sin(t + r / noise(3, 9)) * sin(r * 5 + t) * h + h,
      particleSize,
      particleSize / 3,
    );
  }
}

// #minacoding 2026 June 15th, Rotation
