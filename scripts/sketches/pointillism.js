let i;
t = x = y = c = 0;
preload = () => {
  i = loadImage('/assets/images/rotation-03.png');
};
draw = () => {
  t++ ||
    (createCanvas((W = 500), W),
    noStroke(),
    i.loadPixels(),
    (R = random),
    (F = floor));
  blendMode(SCREEN);
  x = F(R(i.width));
  y = F(R(i.height));
  c = i.get(x, y);
  fill(c);
  circle(x, y, R(4, 30));
};
//#つぶやきProcessing #p5js #minacoding Day 14: 画像を用いた作品を作ってください。

keyPressed = () => {
  if (key === 's') {
    saveGif('pointillism', 20);
  }
};