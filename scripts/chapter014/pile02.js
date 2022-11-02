function setup() {
  createCanvas(windowWidth, windowHeight);
  // background('#f3eed5');
  // stroke('#e5af9b');
  stroke(240);
  noFill();

  for (let i = 0; i < 100; i++) {
    translate(2, 2);
    strokeWeight(random(3));
    circle(0, 0, i * 2);
  }
}
