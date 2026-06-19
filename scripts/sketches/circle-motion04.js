let angle = 0;
let orbitRadius = 0; // 円軌道の半径

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0, 0.05);

  translate(width / 2, height / 2);

  orbitRadius = width / 4;

  for (let i = 0; i < 10; i++) {
    orbitRadius = Math.max(orbitRadius - i * 50, 0);

    for (let j = 0; j < 100; j++) {
      let x = cos(angle) * orbitRadius;
      let y = sin(angle) * orbitRadius;

      stroke((frameCount + i * j) % 360, 100, 100);
      circle(x, y, frameCount % (orbitRadius / 3));
    }
  }

  angle += 0.01;
}
