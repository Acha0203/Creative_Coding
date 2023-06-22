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
    (Y = rotateY),
    (X = rotateX));
  background(0);
  // lights();
  texture(i);
  Y(t * -0.01);
  S(70);
  Y(QUARTER_PI);
  S(90);
  push();
  Y(QUARTER_PI);
  S(110);
  pop();
  // push();
  X(HALF_PI);
  // Y(QUARTER_PI);
  S(130);
  // pop();
  S(150);
};

// #つぶやきProcessing #p5js #minacoding Day 23
