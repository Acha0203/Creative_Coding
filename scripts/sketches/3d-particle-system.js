let system;
particles = [];

function setup() {
  createCanvas(500, 500, WEBGL);
  noStroke();
  system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(0);
  blendMode(ADD);
  lights();
  translate(-250, -50, -100);
  system.addParticle();
  system.run();
}

// A simple Particle class
Particle = function (position, size) {
  this.acceleration = createVector(0, 0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 1), random(-1, 1));
  this.position = position.copy();
  this.lifespan = 500;
  this.size = size;
};

Particle.prototype.run = function () {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function () {
  push();
  translate(this.position.x, this.position.y, this.position.z);
  sphere(this.size);
  pop();
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  return this.lifespan < 0;
};

ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  this.particles.push(new Particle(this.origin, random(10, 50)));
};

ParticleSystem.prototype.run = function () {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
