let layer1, layer2;

setup = () => {
  createCanvas(windowWidth, windowHeight);
  layer1 = C();
  layer2 = C();
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

  if (x > width / 2 + 148) {
    x -= 2;
  } else if (x < width / 2 + 148) {
    x += 2;
  }

  x += floor(movedX);

  layer2.clear();
  layer2.fill(50);
  layer2.circle(x - 70, height / 2, 50);
  layer2.circle(x + 70, height / 2, 50);
  layer2.rect(x - 2, height / 2 + 30, 4, 40);
  layer2.rect(x - 20, height / 2 + 70, 40, 4);
  layer2.ellipse(x, height / 2 + 40, 30, 20);
  layer2.fill(255);
  layer2.circle(x - 60, height / 2 - 10, 9);
  layer2.circle(x + 80, height / 2 - 10, 9);
  layer2.stroke(50);
  layer2.line(x - 100, height / 2 + 30, x - 50, height / 2 + 50);
  layer2.line(x - 100, height / 2 + 60, x - 50, height / 2 + 60);
  layer2.line(x - 100, height / 2 + 90, x - 50, height / 2 + 70);
  layer2.line(x + 100, height / 2 + 30, x + 50, height / 2 + 50);
  layer2.line(x + 100, height / 2 + 60, x + 50, height / 2 + 60);
  layer2.line(x + 100, height / 2 + 90, x + 50, height / 2 + 70);

  I(layer1);
  I(layer2);
};

C = () => {
  return createGraphics(width, height);
};

I = (layer) => {
  image(layer, 0, 0);
};
// #p5js #dailycodingseed #minacoding Day 8
