function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0, 0.03);

  for (let i = 0; i < 10; i++) {
    const tx = random(width);
    const ty = random(height);

    fill((ty / height) * 360, 100, 100);
    circle(tx, ty, random(10, 60));
  }
}
