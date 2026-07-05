let t = 0;
let particles = [];
let spacing = 4; // 砂の細かさ
let density = 1; // ディスプレイのピクセル密度
let initialized = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

  density = pixelDensity();
}

function draw() {
  blendMode(BLEND);
  background(0, 0);
  blendMode(ADD);

  const flowerSize = height / 5;

  if (t < 240 && !initialized) {
    drawFlower(5, flowerSize, 1);
    drawFlower(8, flowerSize * 2, 1);
    drawFlower(15, flowerSize * 4, 0.7);
  }

  if (t >= 240) {
    if (!initialized) {
      initializeParticles();
    }

    if (t > 300) {
      blendMode(BLEND);
      background(0);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        p.update();
        p.display();
      }
    }
  }

  if (t > 360) {
    particles = [];
    initialized = false;
    t = 0;
  }

  t++;
}

function drawFlower(n, m, o) {
  let direction = 1;

  fill((frameCount + n * n) % 360, 80, 20, 0.1);

  for (let r = 0; r < TAU; r += PI / n) {
    let angle = r + sin(frameCount / 50) * o * direction;
    let length = noise(frameCount / 100) * m;
    let x = cos(angle) * length + width / 2;
    let y = sin(angle) * length + height / 2;
    circle(x, y, (length / 4) * sin(frameCount / 50) * o);
    direction = -direction;
  }
}

function initializeParticles() {
  loadPixels();

  colorMode(RGB);

  // 画面のピクセル情報を元にパーティクルを初期化
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      const index = (x + y * width) * 4 * density;
      const r = pixels[index];
      const g = pixels[index + 1];
      const b = pixels[index + 2];
      const particleColor = color(r, g, b);

      particles.push(new Particle(x, y, particleColor));
    }
  }

  colorMode(HSB);

  initialized = true;
}

class Particle {
  constructor(x, y, c) {
    this.origin = createVector(x, y); // 元の位置
    this.current = createVector(x, y); // 現在の位置
    this.vel = createVector(0, 0); // 速度
    this.acc = createVector(0, 0); // 加速度
    this.particleColor = c;
    this.size = spacing;
  }

  update() {
    // 重力を加える
    let gravity = createVector(0, 5);

    this.applyForce(gravity);

    // ランダムな揺れ（風）を加える
    let wind = createVector(random(-5, 5), random(-5, 0));

    this.applyForce(wind);
    this.vel.add(this.acc);
    this.current.add(this.vel);
    this.acc.mult(0); // 加速度をリセット
  }

  applyForce(force) {
    this.acc.add(force);
  }

  display() {
    noStroke();
    fill(this.particleColor);
    rect(this.current.x, this.current.y, this.size, this.size);
  }
}

// #minacoding 2026 June 27th, Wabi-Sabi
// In "Tsurezuregusa", Yoshida Kenkō wrote that there is a profound beauty in things that are incomplete, transient, and mortal. It is believed that this aesthetic sense influenced the construction of the concept of "wabi-sabi".
// 兼好法師は『徒然草』において、未完成なものや、うつろい、滅びゆくものにこそ深い味わいがあると述べています。こうした美意識が、「わび・さび」という概念の形成に影響を与えたと考えられています。
