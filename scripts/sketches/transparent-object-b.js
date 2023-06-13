let i;
t = 0;
preload = () => {
  i = loadImage('/assets/images/symmetrical-ruler-03-m.png');
};
draw = () => {
  t++ ||
    (createCanvas((w = 720), w, WEBGL),
    noStroke(),
    blendMode(ADD),
    (H = push),
    (P = pop),
    (B = box),
    (Q = QUARTER_PI));
  background(0);
  texture(i);
  rotateY(t * -0.01);
  H();
  H();
  rotateX(Q);
  rotateY(Q);
  B(300);
  P();
  B(300);
  P();
};

// #つぶやきProcessing #p5js #minacoding Day 14
