r = 150;
s = 60;
t = a = x = y = 0;

draw = () => {
  t++ || (createCanvas((W = 500), W), noStroke());
  background(0, 0.05);
  fill(W);
  textSize(32);
  text('Loading...', 180, 266);

  colorMode(HSB);
  translate(W / 2, W / 2);

  for (i = 0; i < 6; i++) {
    a = t / s + i;
    x = -cos(a) * r;
    y = sin(a) * r;
    fill((t % 360) + i * 10, r, r);
    circle(x, y, 20);
  }
};
