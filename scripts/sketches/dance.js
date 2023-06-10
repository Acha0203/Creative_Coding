fn = (m, n) => {
  return m + n * noise(frameCount / 100);
};

drawHuman = (d) => {
  const x1 = fn(width / 2, -200 * d);
  const x2 = fn(width / 2, -100 * d);
  const x3 = fn(0, width);
  const x4 = fn(width / 2, 0);
  const y1 = (y2 = y3 = fn(height / 2, 300));
  const y4 = fn(height / 2, 0);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  circle(x4, fn(y4, -100), 50);
};

setup = () => {
  createCanvas(windowWidth, windowHeight);
  noFill();
};

draw = () => {
  background(0, 10);
  stroke(255);
  drawHuman(1);
  drawHuman(-1);
};
