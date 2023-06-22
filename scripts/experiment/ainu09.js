let i;
t = 0;
N = 100;

preload = () => {
  i = loadImage('/assets/images/ainu-pattern-08-2.png');
};

draw = () => {
  t++ ||
    (createCanvas((w = 720), w, WEBGL),
    noStroke(),
    blendMode(SCREEN),
    colorMode(HSB),
    (S = sphere),
    (R = rotateY));
  background(0);
  // lights();
  texture(i);
  R(t * -0.01);
  S(50);
  push();
  R(QUARTER_PI);
  S(90);
  pop();
  rotateX(HALF_PI);
  S(110);
  push();
  rotateX(HALF_PI);
  // R(QUARTER_PI);
  S(130);
  pop();
  S(150);
};

// #つぶやきProcessing #p5js #minacoding Day 23
