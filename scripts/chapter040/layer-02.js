let n, layers;

function setup() {
  createCanvas(windowWidth, windowHeight);

  n = 30;
  layers = [];
  for (let i = 0; i < n; i++) {
    const layer = createGraphics(width, height);
    layer.colorMode(HSB);

    const h = random(360);
    const d = random(100, 300);
    layer.fill(h, 100, 100);
    layer.circle(random(width), random(height), d);
    layers.push(layer);
  }

  drawLayers();
}

function drawLayers() {
  clear();

  layers.forEach((layer) => {
    image(layer, 0, 0);
  });
}

function mouseClicked() {
  for (let i = n - 1; i >= 0; i--) {
    const layer = layers[i];
    if (brightness(layer.get(mouseX, mouseY)) > 0) {
      layers.splice(i, 1);
      layers.push(layer);
      break;
    }
  }
  drawLayers();
}
