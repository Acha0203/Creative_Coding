const d = 60;
let layer1, layer2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  layer1 = createGraphics(width, height);
  layer2 = createGraphics(width, height);

  layer2.fill(255, 50);
}

function draw() {
  layer2.clear();
  layer2.circle(mouseX, mouseY, d);

  clear();
  image(layer1, 0, 0);
  image(layer2, 0, 0);
}

function mouseClicked() {
  layer1.circle(mouseX, mouseY, d);
}
