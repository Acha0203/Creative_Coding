fn = (m, n) => {
  return m + n * noise(frameCount / 100);
};

drawHuman = (d) => {
  const x1 = fn(width / 2, -200 * d);
  const x2 = fn(width / 2, -100 * d);
  const x3 = fn(0, width);
  const x4 = fn(width / 2, 0);
  const y1 = fn(height / 2, 300);
  const y2 = fn(height / 2, 300);
  const y3 = fn(height / 2, 300);
  const y4 = fn(height / 2, 0);

  // stroke(255, 102, 0);
  // line(x1, y1, x2, y2);
  // line(x3, y3, x4, y4);
  // stroke(255);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  push();
  fill(255);
  circle(x4, y4 - 100 * noise(frameCount / 100), 50);
  pop();
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
