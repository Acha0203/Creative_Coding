s = 0.9;
t = a = x = y = 0;
r = 250;
draw = () => {
  t++ || (createCanvas((W = 500), W), angleMode(DEGREES));
  background(0, 30);
  translate(r, r);
  for (let i = 0; i < 360; i += 10) {
    scale(s);
    rotate(a);
    x = cos(i) * r;
    y = sin(i) * r;
    noStroke();
    fill(i);
    circle(x, y, i * 5);
  }
  a += 0.5;
};
// #つぶやきProcessing #p5js #minacoding
