function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);

  drawSpiral(width / 2 - 135, height / 2, 4, 1);
  drawSpiral(width / 2 + 135, height / 2, 4, -1);
  drawAsteroid(width / 2, height / 2 - 100, 30, 140);
}

function drawSpiral(cx, cy, thickness, direction) {
  for (let r = 0; r < TAU * 2.2; r += PI / 360) {
    const p = (r * height) / 100;
    const x = cos(r) * p * direction + cx;
    const y = sin(r) * p + cy;
    fill(0);
    circle(x, y, r * thickness);
  }
}

function drawAsteroid(cx, cy, thickness, size) {
  for (let r = 0; r < TAU; r += PI / 360) {
    const x = Math.pow(cos(r), 3) * size + cx;
    const y = Math.pow(sin(r), 3) * size + cy;
    fill(0);
    circle(x, y, thickness);
  }
}
