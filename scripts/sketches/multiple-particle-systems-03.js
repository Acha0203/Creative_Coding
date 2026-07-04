// #minacoding Day 4
let systems;
let green = 100;
let blue = 150;
let greenD = 1;
let blueD = 1;
let isFirst = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  systems = [];
  addNewParticles(width / 2, height / 2);
}

function draw() {
  background(0);

  for (i = 0; i < systems.length; i++) {
    systems[i].run();
    systems[i].addParticle();

    if (systems[i].number <= 0 && systems[i].particles.length <= 0) {
      systems.splice(i, 1);
    }
  }

  if (systems.length == 0) {
    if (isFirst) {
      addNewParticles(width / 2, height / 2);
      isFirst = false;
    } else {
      isFirst = frameCount % 400 === 0;
    }
  }
}

function mousePressed() {
  if (isHit(mouseX, mouseY)) {
    addNewParticles(mouseX, mouseY);
  }
}

function addNewParticles(x, y) {
  green -= 20 * greenD;
  blue += 20 * blueD;

  if (green >= 250 || green <= 100) {
    greenD *= -1;
  }

  if (blue >= 240 || blue <= 100) {
    blueD *= -1;
  }

  let p = new ParticleSystem(createVector(x, y), green, blue);
  systems.push(p);
}

function isHit(x, y) {
  for (let i = 0; i < systems.length; i++) {
    for (let j = 0; j < systems[i].particles.length; j++) {
      if (
        x <=
          systems[i].particles[j].position.x +
            systems[i].particles[j].size / 2 &&
        x >=
          systems[i].particles[j].position.x -
            systems[i].particles[j].size / 2 &&
        y <=
          systems[i].particles[j].position.y +
            systems[i].particles[j].size / 2 &&
        y >=
          systems[i].particles[j].position.y - systems[i].particles[j].size / 2
      ) {
        console.log('Hit!');
        return true;
      }
    }
  }

  return false;
}

// A simple Particle class
let Particle = function (position, size) {
  this.acceleration = createVector(0, 0.02);
  this.velocity = createVector(random(-5, 5), random(-5, 5));
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
  this.number = 100;
};

ParticleSystem.prototype.addParticle = function () {
  // Add a Particle to the system
  if (this.number > 0) {
    p = new Particle(this.origin, random(5, 30));

    this.particles.push(p);
  }
};

ParticleSystem.prototype.run = function () {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run(this.green, this.blue);
    if (p.isDead()) {
      this.particles.splice(i, 1);
      this.number--;
    }
  }
};

ParticleSystem.prototype.destroySystem = function () {
  this.particles = [];
};
// #p5js #minacoding
