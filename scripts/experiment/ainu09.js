let i;
t = 0;
N = 100;

preload = () => {
  i = loadImage('/assets/images/ainu-pattern-08.png');
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
  lights();
  texture(i);
  R(t * -0.01);
  S(50);
  push();
  R(QUARTER_PI);
  S(100);
  pop();
  R(PI);
  S(150);
};

// #つぶやきProcessing #p5js #minacoding Day 23
