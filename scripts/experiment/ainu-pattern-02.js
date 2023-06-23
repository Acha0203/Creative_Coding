let i;
t = 0;
preload = () => {
  i = loadImage('/assets/images/ainu-pattern-01.png');
};
draw = () => {
  t++ ||
    (createCanvas((w = 720), w, WEBGL),
    noStroke(),
    blendMode(SCREEN),
    (C = cylinder),
    (R = rotateY));
  background(0);
  texture(i);
  R(t * -0.01);
  C(50, 280);
  push();
  rotateX(PI);
  C(100, 560);
  pop();
  R(TAU / 3);
  C(150, 840);
};

// #つぶやきProcessing #p5js #minacoding Day 21
// #dailycodingseed cylinder()
