const flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();

  const numberOfFlowers = 10;
  const maxSize = width / numberOfFlowers;

  for (let i = 0; i < numberOfFlowers; i++) {
    flowers.push(new Flower(maxSize));
  }
}

function draw() {
  blendMode(BLEND);
  background(0, 0.1);
  blendMode(ADD);

  for (let i = 0; i < flowers.length; i++) {
    flowers[i].bloom();
  }
}

class Flower {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.x = random(width);
    this.y = random(height);
    this.size = random(maxSize / 2, maxSize);
    this.petals = random(4, 6);
  }

  bloom() {
    let direction = 3;

    translate(this.x, this.y);

    for (let r = 0; r < TAU; r += PI / this.petals) {
      let angle = r + (sin(frameCount / 50) / 3) * direction;
      let x = cos(angle) * this.size;
      let y = sin(angle) * this.size;
      stroke(this.size + ((frameCount + this.size) % 300), 50, frameCount % 50);
      circle(x, y, this.size + (frameCount % 90));
      direction = -direction;
    }

    if (frameCount % 25 === 0) {
      this.x = random(width);
      this.y = random(height);
      this.size = random(this.maxSize / 2, this.maxSize);
      this.petals = random(4, 6);
    }
  }
}
