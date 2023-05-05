let systems;
let green = 100;
let blue = 150;
let greenD = 1;
let blueD = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  systems = [];
}

function draw() {
  background(0);
  for (i = 0; i < systems.length; i++) {
    systems[i].run();
    systems[i].addParticle();
  }
  if (systems.length == 0) {
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text('click mouse to add particle systems', width / 2, height / 2);
  }
}

function mousePressed() {
  green -= 20 * greenD;
  blue += 20 * blueD;

  if (green >= 250 || green <= 100) {
    greenD *= -1;
  }

  if (blue >= 240 || blue <= 100) {
    blueD *= -1;
  }

  this.p = new ParticleSystem(createVector(mouseX, mouseY), green, blue);
  systems.push(p);
}

// A simple Particle class
let Particle = function (position, size) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
  this.size = size;
};

Particle.prototype.run = function (green, blue) {
  this.update();
  this.display(green, blue);
};

// Method to update position
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function (green, blue) {
  stroke(0, green + 50, blue + 50, this.lifespan);
  strokeWeight(2);
  fill(0, green, blue, this.lifespan);
  ellipse(this.position.x, this.position.y, this.size, this.size);
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

let ParticleSystem = function (position, green, blue) {
  this.origin = position.copy();
  this.particles = [];
  this.green = green;
  this.blue = blue;
};

ParticleSystem.prototype.addParticle = function () {
  // Add either a Particle or CrazyParticle to the system
  p = new Particle(this.origin, random(5, 25));

  this.particles.push(p);
};

ParticleSystem.prototype.run = function () {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run(this.green, this.blue);
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
