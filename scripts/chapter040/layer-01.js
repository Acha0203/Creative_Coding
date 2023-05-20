function setup() {
  createCanvas(windowWidth, windowHeight);

  const n = 30;
  const layers = [];
  for (let i = 0; i < n; i++) {
    const layer = createGraphics(width, height);
    // layer.colorMode(HSB);

    // const h = random(360);
    const h = random(255);
    const d = random(100, 300);
    // layer.fill(h, 100, 100);
    layer.fill(h);
    layer.circle(random(width), random(height), d);
    layers.push({ layer, index: h });
  }

  // layers.sort((a, b) => b.index - a.index);
  layers.sort((a, b) => a.index - b.index);

  layers.forEach((data) => {
    image(data.layer, 0, 0);
  });
}
