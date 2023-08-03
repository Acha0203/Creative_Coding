function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB)
  noStroke()

  system = new Fireworks()
  system.initFireworks()
}

function draw() {
  background(0, 0.05)

  for (let i = 0; i < system.fireworks.length; i++) {
    system.fireworks[i].run()
  }

  if (frameCount % 250 <= 0) system.initFireworks()
}

// A simple Particle class
class Particle {
  constructor(position, x, y, size) {
    this.acceleration = createVector(0, 0.005)
    this.velocity = createVector(x, y)
    this.position = position.copy()
    this.size = size
    this.lifespan = size
  }

  run() {
    this.update()
    this.display()
  }
  // Method to update position
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.lifespan -= 2
  }
  // Method to display
  display() {
    fill((frameCount + this.size) % 360, 90, this.lifespan, this.lifespan)
    circle(
      this.position.x,
      this.position.y,
      random(this.size - this.lifespan) / 50
    )
  }
  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0
  }
}

class Firework {
  constructor(position, size) {
    this.origin = position.copy()
    this.particles = []
    this.size = size
  }

  addParticle() {
    for (let r = 0; r < TAU; r += 0.314) {
      this.particles.push(new Particle(this.origin, cos(r), sin(r), this.size))
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i]
      p.run()
      if (p.isDead()) {
        this.particles.splice(i, 1)
      }
    }
  }
}

class Fireworks {
  constructor() {
    this.fireworks = []
  }

  initFireworks() {
    this.fireworks = []

    for (let i = 0; i < width / 70; i++) {
      this.fireworks.push(
        new Firework(
          createVector(random(width), random(height)),
          random(90, 500)
        )
      )

      this.fireworks[i].addParticle()
      console.log(this.fireworks[i])
    }
  }
}
