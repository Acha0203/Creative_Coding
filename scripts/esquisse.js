let quicksilverList = [];
let numberOfDrops = 20;

function setup() {
  createCanvas(720, 720);
  colorMode(HSB);
  noStroke();
  pixelDensity(1);

  for (let i = 0; i < numberOfDrops; i++) {
    quicksilverList.push(new Quicksilver(random(0, width), random(0, height)));
  }
}

function draw() {
  background(0);

  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let brightValue = 0;

      for (let i = 0; i < quicksilverList.length; i++) {
        if (brightValue < 500) {
          let xDiff = x - quicksilverList[i].x;
          let yDiff = y - quicksilverList[i].y;
          let distance = sqrt(xDiff * xDiff + yDiff * yDiff);

          brightValue += (10 * quicksilverList[i].radius) / distance;
        } else {
          brightValue = 500;
        }
      }

      if (brightValue < 150) {
        brightValue = 50;
      } else if (brightValue >= 150 && brightValue < 240) {
        brightValue = map(brightValue, 150, 239, 50, 70);
      } else if (brightValue >= 240 && brightValue < 300) {
        brightValue = map(brightValue, 240, 299, 20, 45);
      } else if (brightValue >= 300 && brightValue < 400) {
        brightValue = map(brightValue, 300, 399, 46, 70);
      } else if (brightValue >= 400 && brightValue < 500) {
        brightValue = map(brightValue, 400, 499, 71, 79);
      } else {
        brightValue = 80;
      }

      const pixelColor = color(0, 0, brightValue);
      const index = (x + y * width) * 4;

      pixels[index] = red(pixelColor);
      pixels[index + 1] = green(pixelColor);
      pixels[index + 2] = blue(pixelColor);
    }
  }

  updatePixels();

  for (i = 0; i < quicksilverList.length; i++) {
    quicksilverList[i].update();
  }
}

class Quicksilver {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const angle = random(0, 2 * PI);

    this.xVelocity = random(2, 5) * cos(angle);
    this.yVelocity = random(2, 5) * sin(angle);
    this.radius = random(height / 5, height / 2);
  }

  update() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;

    if (this.x > width || this.x < 0) this.xVelocity *= -1;

    if (this.y > height || this.y < 0) this.yVelocity *= -1;
  }
}

// #minacoding 2026 June 28th, Fluid
