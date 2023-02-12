function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  background('#f06d06');
  loadPixels();

  const c = color(0);
  const r = 100;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const d = dist(x, y, width / 2, height / 2);
      if (d <= r) {
        setPixel(x, y, c);
      }
    }
  }

  updatePixels();
}

function setPixel(x, y, c) {
  const i = (y * width + x) * 4;
  pixels[i + 0] = c[0];
  pixels[i + 1] = c[1];
  pixels[i + 2] = c[2];
}
