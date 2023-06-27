const s = 0.93;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  const radius = width / 2;

  background(0, 0.1);
  translate(width / 2, height / 2);

  for (let d = 0; d < 360; d += 9) {
    let radian = d + frameCount / width;
    scale(s);
    rotate(t);
    const x = cos(radian) * radius;
    const y = sin(radian) * radius;
    let size = sin(frameCount / 30 - d * 9) ** 10 * d;
    fill((frameCount + d) % 360, 99, 99);
    circle(x, y, size);
  }

  t += 0.005;
}
