let i;
t = 0;
preload = () => {
  i = loadImage('/assets/images/ainu-pattern-03-m2.png');
};
draw = () => {
  t++ ||
    (createCanvas((w = 720), w, WEBGL),
    noStroke(),
    blendMode(SCREEN),
    colorMode(HSB),
    (S = sphere),
    (Y = rotateY));
  background(0);
  texture(i);
  Y(t * 0.01);
  S(110);
  push();
  Y(QUARTER_PI);
  S(140);
  pop();
  rotateX(HALF_PI);
  S(170);
  S(200);
};

// #つぶやきProcessing #p5js #minacoding Day 23: テーマ「人間」の6日目
