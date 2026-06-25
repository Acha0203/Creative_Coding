const bloomingInterval = 300;
let angle = 0;
let flowers = [];
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

  const radius = Math.max(width, height) * 0.3;

  for (let i = 0; i < 36; i++) {
    const nextCoordinate = calcCoordinate(radius, 0.9 * PI * i);

    flowers.push(new Flower(nextCoordinate.x, nextCoordinate.y, radius));
  }
}

function draw() {
  blendMode(BLEND);
  background(0, 0.05);
  blendMode(ADD);

  for (let i = 0; i < flowers.length; i++) {
    const startTime = i * bloomingInterval;
    const endTime = startTime + bloomingInterval;

    if (t > startTime && t <= endTime) {
      flowers[i].bloom();
    }
  }

  if (t > flowers.length * bloomingInterval) {
    t = 0;
  }

  drawPond(Math.max(width, height) / 2);

  t++;
}

class Flower {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.flowerSize = radius * 0.3;
  }

  bloom() {
    push();
    translate(this.x, this.y);
    this.drawPetals(6, this.flowerSize, 0.1);
    this.drawPetals(10, this.flowerSize * 1.7, 2);
    this.drawPetals(8, this.flowerSize * 2.2, 0.5);
    pop();
  }

  drawPetals(n, m, o) {
    let direction = 1;

    fill((frameCount + n * 3) % 360, 80, 60, 0.1);

    for (let r = 0; r < TAU; r += PI / n) {
      let angle = r + sin(frameCount / 50) * o * direction;
      let length = noise(frameCount / 100) * m;
      let x = cos(angle) * length + width / 2;
      let y = sin(angle) * length + height / 2;
      circle(x, y, length / 4);
      direction = -direction;
    }
  }
}

function calcCoordinate(radius, angle) {
  const r = radius * random(0.6, 1);
  return { x: r * cos(angle), y: r * sin(angle) };
}

function drawPond(radius) {
  push();
  translate(width / 2, height / 2);
  noFill();

  const numberOfCircles = radius / 30;
  const maxRadius = radius * 3;

  let r = radius;

  for (let i = 0; i < numberOfCircles; i++) {
    r += (maxRadius - r) / numberOfCircles;

    strokeWeight(2);
    stroke(0, 0, i - sin(frameCount / numberOfCircles) * i, 0.05);
    circle(0, 0, r);
  }

  pop();
}

// #minacoding 2026 June 24rd, Time
// This animation was inspired by the flowers of time in "Momo" by Michael Ende.
// このアニメーションは、ミヒャエル・エンデの『モモ』に登場する時間の花から着想を得ました。
