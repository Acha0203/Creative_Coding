let img, layer1, layer2;
N = 100;

function preload() {
  img = loadImage('/assets/images/ainu-pattern-03-m3.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width, height, WEBGL);
}

function draw() {
  clear();
  blendMode(MULTIPLY);

  drawBackground(layer1);
  drawAinuSphere(layer2);

  image(layer1, 0, 0);
  image(layer2, 0, 0);
}

function drawAinuSphere(layer) {
  layer.clear();
  layer.background(0);
  layer.blendMode(SCREEN);
  layer.noStroke();
  layer.lights();
  layer.texture(img);

  layer.push();
  layer.rotateY(frameCount * 0.02);
  layer.sphere(height / 12);
  layer.rotateY(frameCount * 0.02);
  layer.sphere(height / 8);
  layer.pop();
  layer.push();
  layer.rotateY(frameCount * 0.02);
  layer.sphere(height / 6);
  layer.pop();
  layer.push();
  layer.rotateX(frameCount * 0.02);
  layer.sphere((height * 5) / 24);
  layer.rotateY(frameCount * -0.02);
  layer.sphere(height / 4);
  layer.pop();
}

function drawBackground(layer) {
  layer.colorMode(HSB);
  layer.noStroke();
  const step = width / N;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let p = Math.sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      layer.fill(210 + p * 60, N, N);
      layer.rect(step * i, step * j, step);
    }
  }
}

// #つぶやきProcessing #p5js #minacoding Day 24
