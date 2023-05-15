function setup() {
  createCanvas((W = windowWidth), W);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0, 0.05);

  drawCircle(6, 200, 0.1);
  drawCircle(10, 350, 2);
  drawCircle(16, 450, 0.5);
}

function drawCircle(n, m, o) {
  let direction = 1;

  fill((frameCount + n * 3) % 360, 80, 100);

  for (let r = 0; r < TAU; r += PI / n) {
    let angle = r + sin(frameCount / 50) * o * direction;
    let length = noise(frameCount / 100) * m;
    let x = cos(angle) * length + width / 2;
    let y = sin(angle) * length + height / 2;
    circle(x, y, length / 20);
    direction = -direction;
  }
}
