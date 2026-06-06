let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  let w = width / 2;
  let h = height / 2;
  let fishSize = Math.max(width, height) / 30;

  t += 0.01;
  blendMode(BLEND);
  background(240, 255, 20, 0.1);
  blendMode(ADD);

  for (let r = 0; r < fishSize; r += 0.1) {
    fill(200 + r, 8 * r, 8 * r, 0.2);
    ellipse(
      tan(r * 2 + t) * w + w,
      sin(t + r / noise(3, 9)) * sin(r * 5 + t) * h + h,
      fishSize,
      fishSize / 3,
    );
  }
}

// #minacoding 2026 June 5th, Sea
// An image of an ocean current or a school of fish.
