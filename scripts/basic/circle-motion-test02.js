let orbitAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0);
  stroke(233, 100, 100);

  translate(width / 2, height / 2);

  const orbitRadius = 100; // 円軌道の半径
  let orbitX = cos(orbitAngle) * orbitRadius;
  let orbitY = sin(orbitAngle) * orbitRadius;
  let minCircleRadius = 15; // 最も小さい円の半径

  for (let i = 0; i < 5; i++) {
    let nextCircleRadius = minCircleRadius + 20 * i;
    let nextOrbitRadius = orbitRadius + minCircleRadius - nextCircleRadius;
    orbitX = cos(orbitAngle) * nextOrbitRadius;
    orbitY = sin(orbitAngle) * nextOrbitRadius;
    circle(orbitX, orbitY, nextCircleRadius * 2);
  }

  orbitAngle += 0.05;
}

function drawCircles() {

}
