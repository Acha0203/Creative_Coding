let i;
t = 0;
preload = () => {
  i = loadImage('/assets/images/symmetrical-ruler-03-m.png');
};
draw = () => {
  t++ ||
    (createCanvas(windowWidth, windowHeight, WEBGL),
    noStroke(),
    blendMode(SCREEN));
  background(0);
  texture(i);
  rotateY(t * -0.01);

  push();
  rotateX(QUARTER_PI);
  box(width / 2);
  rotateY(QUARTER_PI);
  box(width / 2);
  push();
  rotateY(QUARTER_PI);
  rotateX(QUARTER_PI);
  box(width / 2);
  pop();
  pop();
  box(width / 2);
};

// #つぶやきProcessing #p5js #minacoding Day 14
