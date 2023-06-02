t = 0;
w = -250;
s = 0.005;
draw = () => {
  t++ || (createCanvas((W = 500), W, WEBGL), (T = translate));
  background('#つぶやきProcessing #p5js #dailycodingseed');
  normalMaterial();
  T(w, w, w);

  for (let i = 0; i < 30; i++) {
    scale(1.1);
    T(i * 2, i * 2, 0);
    rotateX(t * s);
    rotateY(t * s);
    plane(50);
  }
};
