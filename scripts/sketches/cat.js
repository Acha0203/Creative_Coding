let layer1, layer2;

drawEars = (layer, d) => {
  layer.triangle(
    width / 2 - 90 * d,
    height / 2 - 180,
    width / 2 - 120 * d,
    height / 2 - 70,
    width / 2 - 20 * d,
    height / 2 - 100
  );
};

drawWhiskers = (layer, x, y, d) => {
  layer.line(x - 100 * d, y + 30, x - 50 * d, y + 50);
  layer.line(x - 100 * d, y + 60, x - 50 * d, y + 60);
  layer.line(x - 100 * d, y + 90, x - 50 * d, y + 70);
};

setup = () => {
  createCanvas(windowWidth, windowHeight);
  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width, height);
  layer1.background(255);
  layer1.fill(0);
  layer1.ellipse(width / 2, height / 2, 300, 250);
  drawEars(layer1, 1);
  drawEars(layer1, -1);
};

draw = () => {
  let x = width / 2;
  let y = height / 2;

  x += floor(movedX / 2);
  y += floor(movedY / 2);

  layer2.clear();
  layer2.fill(50);
  layer2.circle(x - 70, y, 50);
  layer2.circle(x + 70, y, 50);
  layer2.rect(x - 2, y + 30, 4, 40);
  layer2.rect(x - 20, y + 70, 40, 4);
  layer2.ellipse(x, y + 40, 30, 20);
  layer2.fill(255);
  layer2.circle(x - 60, y - 10, 9);
  layer2.circle(x + 80, y - 10, 9);
  layer2.stroke(50);
  drawWhiskers(layer2, x, y, 1);
  drawWhiskers(layer2, x, y, -1);

  image(layer1, 0, 0);
  image(layer2, 0, 0);
};
// #p5js #dailycodingseed #minacoding Day 8
