const stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

  const numberOfStars = Math.floor(width * height * (6 / 1e5));

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  clear();
  blendMode(BLEND);
  background(0);
  blendMode(ADD);

  for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(10, 20);
    this.duration = random(30, 60);
  }

  twinkle() {
    const progress = 1 - abs((frameCount % (2 * this.duration)) / this.duration - 1);

    push();
    fill(this.duration * 2 + (frameCount % 300), 50, 10 * progress);
    translate(this.x, this.y);

    for (let l = 0; l < HALF_PI; l += 0.1) {
      ellipse(0, 0, tan(l) * this.size, tan(HALF_PI - l) * this.size);
    }

    pop();
  }
}
