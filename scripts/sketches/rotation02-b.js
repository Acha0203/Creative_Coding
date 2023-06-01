t = 0;
draw = () => {
  t++ || (createCanvas((W = 500), W), noStroke(), (a = r = 0));
  background(0, 10);

  translate(W / 2, W / 2);

  for (let i = 0; i < 100; i++) {
    const x = cos(a) * r;
    const y = sin(a) * r;
    fill(200);
    circle(x, y, 5);

    a += 0.25;

    r = r > W / 2 ? 0 : r + 2;
  }
};
// #つぶやきProcessing #p5js
