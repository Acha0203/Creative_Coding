function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f3eed5');
  noFill();
  strokeWeight(4);

  translate(width / 2, height / 2);
  for (let i = 0; i < 30; i++) {
    stroke(random(256), random(256), random(256));
    for (let a = 0; a < 360; a += 1) {
      push();
      rotate(radians(a));
      const x1 = random(20, 40);
      const x2 = random(80, 120);
      line(x1, 0, x2, 0);
      pop();
    }
  }
}
