const CANVAS_SIZE = 720;
const MAX_PARTICLES = 5000;
const PARTICLES_PER_FRAME = 14;
const INITIAL_SPEED = 3;
const SPEED_DECAY = 0.995;
const NOISE_SCALE = 99;

let particleCount = 0;
let particles = [];

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
}

function draw() {
  background(0, 9);
  filter(BLUR, 3);

  for (let i = 0; i < PARTICLES_PER_FRAME; i++) {
    particles[particleCount % MAX_PARTICLES] = {
      x: CANVAS_SIZE / 2,
      y: CANVAS_SIZE / 2,
      angle: particleCount,
      speed: INITIAL_SPEED,
    };
    particleCount++;
  }

  particles.forEach((p) => {
    p.angle += (noise(p.x / NOISE_SCALE, p.y / NOISE_SCALE, particleCount / CANVAS_SIZE) - 0.5) / 4;
    p.speed *= SPEED_DECAY;
    p.x += cos(p.angle) * p.speed;
    p.y += sin(p.angle) * p.speed;

    // CANVAS_SIZE(720)はRGB各チャンネルの上限255を超えるためクランプされ、実質白色になる
    stroke(CANVAS_SIZE, p.speed ** 2 * 99);
    point(p.x, p.y);
  });
}
