n = 0;
drawRipple = false;
ripples = [];
maxSize = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  n = Math.floor(width * height * (6 / 1e5));
  initRipples();
}

function draw() {
  background(0, 10);
  stroke(frameCount % 100, 100 + (frameCount % 100), 240);

  for (let i = 0; i < n; i++) {
    ellipse(ripples[i].x, ripples[i].y - 300 + (frameCount % 100) * 3, 2, 2);
  }

  if (frameCount % 100 === 0) {
    drawRipple = true;
  }

  if (drawRipple) {
    for (let i = 0; i < n; i++) {
      ripples[i].w =
        ripples[i].w > ripples[i].size
          ? 0
          : ripples[i].w + (frameCount % ripples[i].size);
      ellipse(ripples[i].x, ripples[i].y, ripples[i].w, ripples[i].w / 2);
    }
  }

  if (frameCount % (100 + maxSize) === 0) {
    initRipples();
  }
}

function initRipples() {
  ripples = [];

  for (let i = 0; i < n; i++) {
    ripples.push({
      x: random(0, width),
      y: random(0, height),
      w: 2,
      size: random(50, 300),
    });
  }
}

// #つぶやきProcessing #p5js #minacoding Day 10
