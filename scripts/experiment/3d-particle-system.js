particles = [];
n = 30;

run = (p) => {
  p.velocity.add(p.acceleration);
  p.position.add(p.velocity);
  p.lifespan -= 2;
  push();
  translate(p.position.x, p.position.y, p.position.z);
  sphere(30);
  pop();
};

createParticle = (position) => {
  return {
    acceleration: createVector(0, 0, 0),
    velocity: createVector(random(-1, 1), random(-1, 1), random(-1, 1)),
    position: position.copy(),
    lifespan: width,
  };
};

setup = () => {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
};

draw = () => {
  background(0);
  blendMode(ADD);
  lights();
  particles.push(createParticle(createVector(0, 0)));

  for (let i = particles.length - 1; i >= 0; i--) {
    run(particles[i]);
    if (particles[i].lifespan < 0) {
      particles.splice(i, 1);
    }
  }
};
