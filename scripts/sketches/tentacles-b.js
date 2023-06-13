t = a = l = N = 0;
D = (n, m) => {
  N = noise(t / 90);
  for (r = 0; r < TAU; r += PI / n) {
    a = r + N * 0.2;
    l = N * m;
    push();
    translate(cos(a) * l, sin(a) * l, tan(a) * l);
    sphere(m / 30);
    pop();
  }
};
draw = () => {
  t++ || (createCanvas((W = 500), W, WEBGL), noStroke());
  background(0);
  lights();
  for (i = 1; i < 10; i++) {
    rotateZ(t * 0.005);
    D(i * 10, i * 90);
  }
};

// #つぶやきProcessing #p5js #dailycodingseed

keyPressed = () => {
  if (key === 's') {
    saveGif('tentacles-b', 10);
  }
};
