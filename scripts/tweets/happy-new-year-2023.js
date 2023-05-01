(t = 0), (h = 100);
draw = () => {
  t++ || (createCanvas((W = 600), W), colorMode(HSB));
  background(0, 0.03);
  let c = t % 360,
    r = random(W),
    s = random(W);
  T = 12 + random(30);
  textSize(T);
  fill(c, h, h);
  text('Happy', r, s);
  fill(c + 10, h, h);
  text('New Year!', r + T, s + T);
  fill(c + 20, h, h);
  text('2023', r + T * 2, s + T * 2);
};
