function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 50; i++) {
    const x = random(width);
    const y = random(height);
    const r = random(10, 50);

    stroke(240);
    noFill();
    circle(x, y, r * 2);

    noStroke();
    fill(240);
    text(r.toFixed(0), x, y);
  }
}