let leaves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

  for (let i = 0; i < 100; i++) {
    leaves.push(new Leaf());
  }
}

function draw() {
  background(0);

  for (let i = 0; i < leaves.length; i++) {
    leaves[i].fall();
  }
}

class Leaf {
  constructor() {
    this.baseX = random(width);
    this.x = this.baseX;
    this.y = random(height);
    this.speed = random(2, 5);
    this.leafSize = random(5, 10);
    this.time = random(900);
    this.amplitude = random(20, 100);
    this.angle = 0;
    this.hue = random(0, 40);
  }

  fall() {
    this.y = this.y + this.speed;
    this.x = this.baseX + this.amplitude * sin(this.time);
    this.time += 0.01;
    this.angle += 0.1;

    if (this.y > height) {
      this.baseX = random(width);
      this.y = 0;
      this.speed = random(2, 5);
      this.time = random(900);
      this.amplitude = random(20, 100);
      this.angle = 0;
      this.hue = random(0, 40);
    }

    push();
    fill(this.hue, 100, 50);
    translate(this.x, this.y);
    rotate(((this.time * PI) / 3600) * this.angle);
    ellipse(0, 0, this.leafSize, this.leafSize * 2);
    pop();
  }
}

// 下記のコードを参考にしました
// https://editor.p5js.org/coderdojokamiyama/sketches/usgflU5tJ
