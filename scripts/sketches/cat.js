let layer1, layer2;

setup = () => {
  createCanvas(windowWidth, windowHeight);
  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width, height);
  layer1.background(255);
  layer1.fill(0);
  layer1.ellipse(width / 2, height / 2, 300, 250);
  layer1.triangle(
    width / 2 - 90,
    height / 2 - 180,
    width / 2 - 120,
    height / 2 - 70,
    width / 2 - 20,
    height / 2 - 100
  );
  layer1.triangle(
    width / 2 + 90,
    height / 2 - 180,
    width / 2 + 120,
    height / 2 - 70,
    width / 2 + 20,
    height / 2 - 100
  );
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
  layer2.line(x - 100, y + 30, x - 50, y + 50);
  layer2.line(x - 100, y + 60, x - 50, y + 60);
  layer2.line(x - 100, y + 90, x - 50, y + 70);
  layer2.line(x + 100, y + 30, x + 50, y + 50);
  layer2.line(x + 100, y + 60, x + 50, y + 60);
  layer2.line(x + 100, y + 90, x + 50, y + 70);

  image(layer1, 0, 0);
  image(layer2, 0, 0);
};
// #p5js #dailycodingseed #minacoding Day 8
