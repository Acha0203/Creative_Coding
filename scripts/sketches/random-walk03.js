const numberOfWalkers = 40;
let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();

  for (let i = 0; i < numberOfWalkers; i++) {
    walkers.push(new RandomWalker());
  }
}

function draw() {
  blendMode(BLEND);
  background(0, 0.08);
  blendMode(ADD);

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].walk();
  }
}

class RandomWalker {
  constructor() {
    this.x = floor(width / 2);
    this.y = floor(height / 2);
    this.tx = this.x;
    this.ty = this.y;
    this.size = min(width, height) * random(0.01, 0.2);
    this.speed = random(0.01, 0.1);
    this.weight = random(2, 20);
    this.hue = random(120, 270);
    this.bright = random(30, 70);
  }

  walk() {
    stroke(this.hue, 100, this.bright);
    strokeWeight(this.weight);

    if (abs(this.x - this.tx) < 1 && abs(this.y - this.ty) < 1) {
      this.tx = this.x + random([-this.size, this.size]);
      this.ty = this.y + random([-this.size, this.size]);

      if (this.tx > width) {
        this.tx = 0;
        this.x = 0;
      }
      if (this.tx < 0) {
        this.tx = width;
        this.x = width;
      }
      if (this.ty > height) {
        this.ty = 0;
        this.y = 0;
      }
      if (this.ty < 0) {
        this.ty = height;
        this.y = height;
      }
    }

    this.x = lerp(this.x, this.tx, this.speed);
    this.y = lerp(this.y, this.ty, this.speed);

    point(this.x, this.y);
  }
}

// #minacoding 2026 June 29th, Random
