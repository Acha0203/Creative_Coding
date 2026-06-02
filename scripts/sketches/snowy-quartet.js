function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

let img;

function preload() {
  img = loadImage('/assets/images/string-sextet-01-old.png');
}

function draw() {
  let angle = frameCount * 0.01;

  background(0);
  blendMode(ADD);
  texture(img);
  rotateY(angle);

  push();
  rotateX(angle);
  box(width / 4);
  rotateY(angle);
  box(width / 2);
  push();
  rotateY(angle);
  rotateX(angle);
  box(width * (2 / 3));
  pop();
  pop();
  box(width);
}

// #minacoding 2026 June 3rd, Image
